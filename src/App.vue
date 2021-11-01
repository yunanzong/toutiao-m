<template>
  <div id='app'>

    <router-view/>
    <!-- router-view不能删除，是路由的出口 -->
    <h1>头条</h1>
    <div>
      <!-- i标签是斜体文本，意思是原来文本不同的文本，以示区别 -->
      <i class='toutiao toutiao-shipin'></i>
    </div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

</style>
