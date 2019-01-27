<template>
  <div>
    <Error :error="challengeError"/>
    <div v-if="checkingChallenge">(読み込んでるっぽい画面)</div>
    <div v-else-if="!challengeError">
      <div>{{ client.name }} ({{ client.id }}) が次の権限をリクエストしています</div>
      <div>
        <ul>
          <li v-for="scope in requestedScopes" v-bind:key="scope">{{ scope }}</li>
        </ul>
      </div>
      <div>
        <button v-on:click="onAccept()">許可する</button>
        <button v-on:click="onReject()">許可しない</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Error from '@/components/Error.vue';

export default {
  name: 'oauthConsent',
  components: {
    Error,
  },
  data() {
    return {
      name: '',
      password: '',
      consentChallenge: '',
    };
  },
  computed: {
    ...mapState('oauthConsent', [
      'checkingChallenge',
      'skip',
      'redirectURL',
      'challengeError',
      'requestedScopes',
      'client',
    ]),
  },
  methods: {
    ...mapActions('oauthConsent', [
      'startOAuthConsent',
      'accept',
      'reject',
    ]),
    onAccept() {
      this.accept(this.consentChallenge);
    },
    onReject() {
      this.reject(this.consentChallenge);
    },
  },
  async created() {
    this.consentChallenge = this.$route.query.consent_challenge;
    this.startOAuthConsent(this.consentChallenge);
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
