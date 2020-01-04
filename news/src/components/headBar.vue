<template>
  <div class="head">
    <div class="head-bar">
      <img
        src="../assets/img/head-icon.png"
        alt=""
        class="head-icon"
        @click="seleted"
      />
      <div class="middle">
        <img src="../assets/img/logo.png" alt="" class="logo-icon" />
        <img
          src="../assets/img/titlebar_refresh_small.png"
          alt=""
          class="refresh-icon"
        />
      </div>
      <router-link to="/search">
        <img
          src="../assets/img/feed_ic_search_normal.png"
          alt=""
          class="search-icon"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "headBar",
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    seleted() {
      this.$store.commit("SHOWDIALOG", this.isShow);
    }
  }
};
</script>
<style lang="less" scoped>
.head-bar {
  position: fixed;
  width: 100%;
  background-color: #d43d3d;
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: center;
  .head-icon,
  .search-icon {
    width: 25px;
  }
  .head-icon {
    position: absolute;
    left: 15px;
  }
  .search-icon {
    position: absolute;
    right: 45px;
    top:0;
    bottom: 0;
    margin: auto 0;
  }
  .middle {
    display: flex;
    align-items: center;
    .logo-icon {
      width: 80px;
      margin-right: 5px;
    }
    .refresh-icon {
      width: 15px;
      margin-right: 15px;
    }
  }
}
</style>
