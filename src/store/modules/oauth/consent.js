import oauthClient from '@/api/oauth';

export default {
  namespaced: true,
  state: {
    checkingChallenge: true,
    skip: false,
    redirectURL: null,
    challengeError: null,
    requestedScopes: null,
    client: null,
  },
  /* eslint no-param-reassign: 0 */
  mutations: {
    setConsentRequest(state, {
      skip, redirectURL, requestedScopes, client,
    }) {
      state.skip = skip;
      state.redirectURL = redirectURL;
      state.requestedScopes = requestedScopes;
      state.client = client;
    },
    setCheckingChallenge(state, checking) {
      state.checkingChallenge = checking;
    },
    setChallengeError(state, challengeError) {
      state.challengeError = challengeError;
    },
    setRedirectURL(state, redirectURL) {
      state.redirectURL = redirectURL;
    },
  },
  /* eslint no-param-reassign: 2 */
  actions: {
    async startOAuthConsent({ commit }, challenge) {
      commit('setCheckingChallenge', true);
      try {
        const resp = await oauthClient.startOAuthConsent(challenge);
        commit('setConsentRequest', {
          skip: resp.data.skip,
          redirectURL: resp.data.redirect_url,
          requestedScopes: resp.data.requested_scopes,
          client: resp.data.client,
        });
      } catch (e) {
        commit('setChallengeError', e);
      }
      commit('setCheckingChallenge', false);
    },
    async accept({ commit, state }, challenge) {
      try {
        const resp = await oauthClient.consent(challenge, true, state.requestedScopes);
        commit('setRedirectURL', resp.data.redirect_url);
      } catch (e) {
        commit('setChallengeError', e);
      }
    },
    async reject({ commit, state }, challenge) {
      try {
        const resp = await oauthClient.consent(challenge, false, state.requestedScopes);
        commit('setRedirectURL', resp.data.redirect_url);
      } catch (e) {
        commit('setChallengeError', e);
      }
    },
  },
};
