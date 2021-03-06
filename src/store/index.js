import Vue from 'vue';
import Vuex from 'vuex';
import oauthLogin from './modules/oauth/login';
import oauthConsent from './modules/oauth/consent';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    oauthLogin,
    oauthConsent,
  },
});
