<template>
  <div class="page404">
    <p>页面未找到...</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: "page404",
  created() {}
}
</script>

<style lang="scss" scoped>
.page404 {
  font-size: 14px;
}
</style>
