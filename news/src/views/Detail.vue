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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {};
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
        word-wrap: break-word;
        color: #222;
        text-align: justify;
        list-style-position: inside;
        list-style-type: square;
        font-size: 18px;
        line-height: 1.76;
      }
    }
  }
}
</style>
