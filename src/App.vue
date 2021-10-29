<template>
  <div id='app'>

    <router-view/>
    <!-- router-view不能删除，是路由的出口 -->
    <h1>头条</h1>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

</style>
