<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import * as grpcWeb from 'grpc-web';
import { SessionServiceClient } from '@/api/SessionsServiceClientPb.ts';
import { CreateSessionRequest, Session } from '@/api//sessions_pb';

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
  },
  async created() {
    const cli = new SessionServiceClient('http://localhost:8001', null, null);
    const req = new CreateSessionRequest();
    req.setName('gedorinku');
    req.setPassword('hoge');
    cli.createSession(req, {}, (err: grpcWeb.Error, resp: Session) => {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(resp.getSessionId());
      }
    });
  },
});
</script>
