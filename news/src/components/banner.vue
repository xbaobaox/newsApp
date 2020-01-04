<template>
  <div class="banner">
    <img
      src="../assets/img/close.png"
      alt=""
      class="close"
      @click="seleted()"
    />
    <img src="../assets/img/banner.png" alt="" class="banner-icon" />
    <p class="banner-desc">已加载好您感兴趣的头条</p>
    <p class="open">立即打开</p>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      isShow: false
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
.banner {
  width: 290px;
  box-sizing: border-box;
  height: 250px;
  background-color: #fff;
  position: relative;
  padding: 10px 25px;
  border-radius: 5px;
  .close {
    position: absolute;
    right: 10px;
    width: 18px;
  }
  .banner-icon {
    width: 180px;
    margin-left: 30px;
  }
  .banner-desc {
    color: #999;
    text-align: center;
    font-size: 17px;
    margin-bottom: 30px;
  }
  .open {
    background-color: rgb(255, 103, 98);
    text-align: center;
    padding: 8px;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
  }
}
</style>
