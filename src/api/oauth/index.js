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
};
