<template>
  <div class="news-subject">
    <div class="news-item" v-for="(item, index) of type2Data" :key="index">
      <div class="item-left">
        <p class="title">
          {{ item.title }}
        </p>
        <div class="item-bott">
          <span class="source">{{ item.source }}</span>
          <span class="cmt">评论 {{ item.comment }}</span
          ><span class="date">{{ item.date }}</span>
        </div>
      </div>

      <img
        :src="src"
        alt=""
        class="news-imgs"
        v-for="(src, index) of item.img"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "newsType2",
  props: {
    type2Data: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.news-subject {
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  .news-item {
    margin: 15px 0;
    position: relative;
    display: flex;
    align-items: center;
    padding: 15px;
    .item-left {
      flex: 1;
      .item-bott {
        font-size: 10px;
        color: #999;
        margin-top: 5px;
        span {
          margin-right: 5px;
        }
      }
    }
    .news-imgs {
      position: absolute;
      right: 15px;
      width: 32%;
    }
  }
}
</style>
