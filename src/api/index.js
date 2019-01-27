import axios from 'axios';

export default {
  client: axios.create({
    baseURL: process.env.VUE_APP_ACCOUNTS_BASE_URL,
  }),
};
