<template>
  <div class="detail">
    <div class="head">
      <img src="../assets/img/detail-logo.png" alt="" class="detail-icon" />
      <span>今日头条</span>
      <p class="open">打开</p>
    </div>
    <div class="detail-main">
      <h2 class="detail-title">
        若美伊全面开战，中国将再获20年发展机遇期？
      </h2>
      <div class="author-box">
        <img src="../assets/img/author-head.jpg" alt="" class="author-head" />
        <p class="author">胡锡进</p>
        <img src="../assets/img/vip-icon.png" alt="" class="vip" />
        <p class="source-state">原创</p>
        <div class="comment">
          <span class="time">4小时前</span>
          <span class="dot"></span>
          <span class="counts">1238评论</span>
        </div>
      </div>
      <div class="detail-cont">
        <p>
          特朗普总统表示如果有美国人和美国目标遭到袭击，美国将毫不犹豫地摧毁伊朗的52个目标。他还表示届时将对伊朗发射一些“全新的、漂亮的”装备。
        </p>
        <img src="../assets/img/detail-news.jpg" alt="" class="news-pic" />
        <p>
          稍早，伊朗伊斯兰革命卫队的官员表示，伊朗已经瞄准了美国的35个目标。接替苏莱曼尼的指挥官表示，人们会看到美国人在中东“尸横遍野”。
        </p>
        <img src="../assets/img/detail-news1.jpg" alt="" />
        <p>
          这些有可能是相互威胁，伊朗需要安抚它的军队和民众，美国则希望吓住伊朗不要贸然采取报复行动。但是美国通过这种警告来促使伊朗保持冷静的做法，其实现万无一失的逻辑是脆弱的。
        </p>
        <p>
          就像特朗普总统想用杀死苏莱曼尼来赢得支持率一样，伊朗政权也面临要让美方“血债血偿”的巨大压力。完全不采取行动对伊朗现政权在政治上是危险的，事情以这种方式结束也被各路分析人士普遍不看好。
        </p>
        <p>
          伊朗有可能会看重“选举年美国尤其打不起战争”的赌注，而采取一些报复行动。或者德黑兰克制了，但是一些亲伊朗的中东力量报复了美国目标。世界各地还有可能出现一些一时找不到负责任者的针对美国目标的袭击。无论什么情况，都可能形成十分敏感的一触即发局面。
        </p>
      </div>
    </div>
    <div class="rec">
      <p class="rec-title">热门推荐</p>
      <div class="rec-item" v-for="(item, index) of rec" :key="index">
        <recType1 v-if="item.type == 1" :rtData1="[item]" />
        <recType2 v-else-if="item.type == 2" :rtData2="[item]" />
      </div>
    </div>
  </div>
</template>

<script>
import recType1 from "../components/recType1.vue";
import recType2 from "../components/recType2";
export default {
  name: "detail",
  components: {
    recType1,
    recType2
  },
  data() {
    return {
      rec: [
        {
          type: 1,
          title: "服刑出狱人员有补贴吗，补贴的标准是怎样的？",
          img: [
            require("../assets/img/rec1.jpg"),
            require("../assets/img/rec2.jpg"),
            require("../assets/img/rec3.jpg")
          ],
          author: "法妞问答",
          counts: 58
        },
        {
          type: 2,
          title: "容留他人吸毒罪立案标准是什么？",
          img: require("../assets/img/rec4.jpg"),
          author: "王平鞠律师",
          counts: 1
        },
        {
          type: 2,
          title: "法律规定赌博是违法的，那赌债可以不还吗？",
          img: require("../assets/img/rec5.jpg"),
          author: "南京五老村司法所",
          counts: 72
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.detail {
  .head {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 4px;
    .detail-icon {
      width: 35px;
      margin-right: 5px;
    }
    span {
      font-size: 14px;
    }
    .open {
      position: absolute;
      right: 15px;
      padding: 3px 20px;
      border-radius: 15px;
      color: #fff;
      background-image: linear-gradient(to right, #ff0000, #ff5050);
    }
  }
  .detail-main {
    padding: 15px;
    .detail-title {
      font-weight: 400;
    }
    .author-box {
      margin: 10px 0;
      display: flex;
      align-items: center;
      .author-head {
        width: 23px;
        border-radius: 50%;
        margin-right: 5px;
      }
      .author {
        font-size: 14px;
        font-weight: bold;
        margin-right: 5px;
      }
      .vip {
        width: 14px;
        margin-right: 5px;
      }
      .source-state {
        font-size: 10px;
        border: 1px solid #666;
        border-radius: 3px;
        color: #333;
        margin-right: 5px;
      }
      .comment {
        position: absolute;
        right: 15px;
        span {
          font-size: 12px;
          color: #999;
        }
        .dot {
          display: inline-block;
          width: 2px;
          height: 2px;
          border-radius: 1px;
          background-color: #999;
          margin: 0 4px;
          vertical-align: middle;
        }
      }
    }
    .detail-cont {
      p {
        margin-top: 17px;
        margin-bottom: 17px;
        word-wrap: break-word;
        color: #222;
        text-align: justify;
        list-style-position: inside;
        list-style-type: square;
        font-size: 18px;
        line-height: 1.76;
      }
      img {
        width: 100%;
      }
    }
  }
  .rec {
    padding: 15px;
    .rec-title {
      // font-size: 18px;
      font-weight: bold;
      position: relative;
      right: 4px;
    }
    .rec-title::before {
      content: "";
      position: relative;
      right: 10px;
      width: 4px;
      height: 18px;
      border-radius: 1px;
      // margin-right: 10px;
      background-color: #f85959;
      display: inline-block;
      vertical-align: sub;
    }
  }
}
</style>
