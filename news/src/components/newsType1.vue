<template>
  <div class="news-subject">
    <div class="news-item" v-for="(item, index) of type1Data" :key="index">
      <p class="title">
        {{ item.title }}
      </p>
      <div class="item-img">
        <img
          :src="src"
          alt=""
          class="news-imgs"
          v-for="(src, index) of item.img"
          :key="index"
        />
      </div>
      <div class="item-bott">
        <span class="source">{{ item.source }}</span>
        <span class="cmt">评论 {{ item.comment }}</span
        ><span class="date">{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsType1",
  props:{
    type1Data:Array
  },
  data() {
    return {
    };
  },
  created(){
    // console.log(this.type1Data)
  }
};
</script>

<style lang="less" scoped>
.news-subject {
  .news-item {
    padding: 15px 0px;
    margin: 0 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    .item-img {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      margin-top: 5px;
      .news-imgs {
        width: 32%;
        margin-right: 5px;
      }
    }
    .item-bott {
      font-size: 10px;
      color: #999;
      margin-top: 5px;
      span {
        margin-right: 5px;
      }
    }
  }
}
</style>
