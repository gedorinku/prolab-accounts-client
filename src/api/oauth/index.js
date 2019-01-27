import api from '@/api';

export default {
  async startOAuthLogin(loginChallenge) {
    const res = await api.client.get('/oauth/login', { params: { loginChallenge } });
    return res;
  },
  async login(loginChallenge, name, password) {
    const res = await api.client.post('/oauth/login', { loginChallenge, name, password });
    return res;
  },
  async startOAuthConsent(consentChallenge) {
    const res = await api.client.get('/oauth/consent', { params: { consentChallenge } });
    return res;
  },
  async consent(consentChallenge, accept, grantScopes) {
    const res = await api.client.post('/oauth/consent', { consentChallenge, accept, grantScopes });
    return res;
  },
};
