<template>
  <div class="container">
    <p v-html="this.date"></p>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  data() {
    return {
      date: ""
    };
  },
  mounted: {
    async getDate() {
      const Newdate = await this.$axios.$get("http://test.app/api/timestamp");
      this.date = Newdate;
    }
  }
};
</script>
