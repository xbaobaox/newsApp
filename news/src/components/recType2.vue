<template>
  <div class="rec-type2">
    <img :src="rtData2[0].img" alt="" />
    <div class="right">
      <p class="title">{{ rtData2[0].title }}</p>
      <div class="right-bott">
        <span class="open">打开APP</span>
        <span>{{ rtData2[0].author }}</span>
        <span>{{ rtData2[0].counts }}条评论</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recType2",
  props: {
    rtData2: Array
  },
  created() {
    console.log(this.rtData2);
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.rec-type2{
  display:flex;
  align-items: center;
  margin-bottom: 15px;
  img{
    width: 35%;
  }
  .right{
    padding-left: 10px;
    .title{
      font-size: 18px;
    }
    span{
     font-size: 10px;
     color:#999;
     margin-right: 5px;
    }
    .open{
      color:red;
    }
  }
}
</style>
