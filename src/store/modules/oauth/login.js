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
    setCheckingChallenge(state, checking) {
      state.checkingChallenge = checking;
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
      commit('setCheckingChallenge', true);
      try {
        const resp = await oauthClient.startOAuthLogin(challenge);
        commit('setLoginRequest', {
          skip: resp.data.skip,
          redirectURL: resp.data.redirect_url,
        });
      } catch (e) {
        commit('setLoginRequest', { challengeError: e });
      }
      commit('setCheckingChallenge', false);
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
