<template>
  <div class="head-bar">
    <img src="../assets/img/head-icon.png" alt="" class="head-icon">
    <div class="middle">
      <img src="../assets/img/logo.png" alt="" class="logo-icon">
      <img src="../assets/img/titlebar_refresh_small.png" alt="" class="refresh-icon">
    </div>
    <img src="../assets/img/feed_ic_search_normal.png" alt="" class="search-icon">
  </div>
</template>
<script>
export default {
  name:'headBar'
}
</script>
<style lang="less" scoped>
.head-bar{
  position: fixed;
  width: 100%;
  background-color: #d43d3d;
  display:flex;
  align-items: center;
  padding: 15px;
  justify-content: center;
  .head-icon,.search-icon{
    width: 30px;
  }
  .head-icon{
    position: absolute;
    left: 15px;
  }
  .search-icon{
    position: absolute;
    right: 45px;
  }
  .middle{
    display:flex;
    align-items: center;
    .logo-icon{
      width: 80px;
      margin-right: 5px;
    }
    .refresh-icon{
      width: 15px;
      margin-right: 15px;
    }
  }
}
</style>