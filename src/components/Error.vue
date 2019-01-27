<template>
  <div v-show="this.error">{{ message }}</div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error'],
  computed: {
    message() {
      if (!this.error) {
        return null;
      }
      if (this.error.response) {
        return `${this.error.response.status} ${this.error.response.statusText}: ${this.error.response.data.message}`;
      }
      return 'サーバーに接続できません';
    },
  },
};
</script>
