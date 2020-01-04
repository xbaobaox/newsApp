<template>
  <div class="news-subject">
    <div class="news-item" v-for="(item, index) of type3Data" :key="index">
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
  name: "newsType3",
  props: {
    type3Data: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.news-subject {
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  .news-item {
    padding: 15px;
    .item-img {
      .news-imgs {
        margin-top: 10px;
        width: 100%;
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
