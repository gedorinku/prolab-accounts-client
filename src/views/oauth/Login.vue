<template>
  <div>
    <ErrorMessage :error="challengeError"/>
    <div v-if="checkingChallenge">(読み込んでるっぽい画面)</div>
    <div v-else-if="!challengeError">
      <form v-on:submit.prevent="onLogin">
        <div>
          <input required type="text" placeholder="ユーザー名またはメールアドレス" v-model="name">
        </div>
        <div>
          <input required type="password" placeholder="パスワード" v-model="password">
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
        <ErrorMessage :error="loginError"/>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'oauthLogin',
  components: {
    ErrorMessage,
  },
  data() {
    return {
      name: '',
      password: '',
      loginChallenge: '',
    };
  },
  computed: {
    ...mapState('oauthLogin', [
      'checkingChallenge',
      'skip',
      'redirectURL',
      'challengeError',
      'loginError',
    ]),
  },
  methods: {
    ...mapActions('oauthLogin', [
      'startOAuthLogin',
      'login',
    ]),
    onLogin() {
      this.login({
        challenge: this.loginChallenge,
        name: this.name,
        password: this.password,
      });
    },
  },
  async created() {
    this.loginChallenge = this.$route.query.login_challenge;
    this.startOAuthLogin(this.loginChallenge);
  },
  watch: {
    redirectURL(newURL) {
      if (newURL) {
        window.location.href = newURL;
      }
    },
  },
};
</script>
