<template>
  <div class="rec-type1">
    <p class="title">{{ rtData1[0].title }}</p>
    <div class="img-box">
      <img
        class="rec-img-box"
        :src="item"
        v-for="(item, index) of rtData1[0].img"
        :key="index"
      />
    </div>
    <div class="bott">
      <span class="open">打开APP</span>
      <span>{{ rtData1[0].author }}</span>
      <span>{{ rtData1[0].counts }}条评论</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "recType1",
  props: {
    rtData1: Array
  },
  created() {
    console.log(this.rtData1);
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.rec-type1 {
  margin-bottom: 15px;
  .title {
    font-size: 18px;
    margin-bottom: 5px;
  }
  .img-box {
    display: flex;
    img {
      width: 33%;
    }
  }
  .bott{
    display:flex;
    align-items: center;
    font-size: 12px;
    margin-top: 5px;
    color:#999;
    span{
      margin-right: 5px;
    }
    .open{
      color:red;
    }
  }
}
</style>
