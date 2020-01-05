<template>
  <div class="home">
    <headBar />
    <indexBar />
    <div class="cont">
        <div class="filter" v-for="(item, index) of newsInfo" :key="index">
          <newsType1 v-if="item.type == 1" :type1Data="[item]" />
          <newsType2 v-else-if="item.type == 2" :type2Data="[item]" />
          <newsType3 v-else-if="item.type == 3" :type3Data="[item]" />
        </div>
    </div>
    <div class="mask" v-if="isShow">
      <banner class="banner" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import headBar from "../components/headBar";
import indexBar from "../components/indexBar";
import newsType1 from "../components/newsType1";
import newsType2 from "../components/newsType2";
import newsType3 from "../components/newsType3";
import banner from "../components/banner";
export default {
  name: "home",
  components: {
    headBar,
    indexBar,
    newsType1,
    newsType2,
    newsType3,
    banner
  },
  data() {
    return {
      news: [
        {
          type: 1,
          title:
            "彩云长在有新天——党的十九大以来以习近平同志为核心的党中央关心推进宣传思想工作纪实",
          source: "新华网客户端",
          comment: "2172",
          date: "1天前",
          img: [
            require("../assets/img/news-jpg1.jpg"),
            require("../assets/img/news-jpg2.jpg"),
            require("../assets/img/news-jpg3.jpg")
          ]
        },
        {
          type: 1,
          title: "只争朝夕，不负韶华，跟习近平主席一起走进2020",
          source: "样式新闻",
          comment: "83.",
          date: "2小时前"
        },
        {
          type: 2,
          title: "白糖出事了",
          source: "法制日报",
          comment: "95",
          date: "",
          img: [require("../assets/img/type3.jpg")]
        },
        {
          type: 3,
          title: "聚划算百亿补贴，同事们抢疯了，这么低的价格，赶紧入手",
          source: "淘宝聚划算百亿补贴",
          comment: "1",
          date: "1小时前",
          img: [require("../assets/img/type4.jpg")]
        }
      ]
    };
  },
  computed: {
    isShow() {
      return this.$store.state.showDialog;
    },
    newsInfo() {
      return this.$store.state.newsState;
    }
  },
  created() {
    this.$store.commit("NEWSINFO", this.news);
    console.log(this.newsInfo);
  }
};
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
}

.banner {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.cont {
  padding-top: 90px;
}
</style>
