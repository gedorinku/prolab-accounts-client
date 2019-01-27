<template>
  <div class="home"></div>
</template>

<script>
import oauthClient from '@/api/oauth';

export default {
  name: 'home',
  async created() {
    try {
      const resp = await oauthClient.startOAuthLogin('hoge');
      console.log(resp);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
