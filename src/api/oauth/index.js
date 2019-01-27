import api from '@/api';

export default {
  async startOAuthLogin(loginChallenge) {
    const res = await api.client.get('/oauth/login', { params: { loginChallenge } });
    return res;
  },
};
