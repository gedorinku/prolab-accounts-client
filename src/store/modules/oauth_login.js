import oauthClient from '@/api/oauth';

export default {
  namespaced: true,
  state: {
    checkingChallenge: true,
    skip: false,
    redirectURL: null,
    challengeError: null,
    loginError: null,
  },
  /* eslint no-param-reassign: 0 */
  mutations: {
    setLoginRequest(state, { skip, redirectURL, challengeError }) {
      state.checkingChallenge = false;
      state.skip = skip;
      state.redirectURL = redirectURL;
      state.challengeError = challengeError;
    },
    setRedirectURL(state, redirectURL) {
      state.redirectURL = redirectURL;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
  },
  /* eslint no-param-reassign: 2 */
  actions: {
    async startOAuthLogin({ commit }, challenge) {
      try {
        const resp = await oauthClient.startOAuthLogin(challenge);
        commit('setLoginRequest', resp.data);
      } catch (e) {
        commit('setLoginRequest', { challengeError: e });
      }
    },
    async login({ commit }, { challenge, name, password }) {
      try {
        const resp = await oauthClient.login(challenge, name, password);
        commit('setRedirectURL', resp.data.redirect_url);
      } catch (e) {
        commit('setLoginError', e);
      }
    },
  },
};
