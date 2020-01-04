<template>
  <div class="search">
    <div class="search-head">
      <div class="space"></div>
      <img src="../assets/img/searchlogo.png" alt="" class="search-logo" />
      <div class="search-btn">
        <p class="search-btn-name">搜你想看</p>
        <img src="../assets/img/search.svg" alt="" />
      </div>
    </div>
    <div class="search-main">
      <div class="search-main-head">
        <img src="../assets/img/searchtitle.png" alt="" />
        <p class="title-desc">每分钟更新一次</p>
      </div>
      <div class="search-item" v-for="(item, index) of search" :key="index">
        <p class="list">{{ item.id }}</p>
        <p class="name">{{ item.name }}</p>
        <img
          src="../assets/img/icon_fei.png"
          alt=""
          class="state"
          v-if="item.type == 'boil'"
        />
        <img
          src="../assets/img/icon_re.png"
          alt=""
          class="state"
          v-else-if="item.type == 'hot'"
        />
        <img
          src="../assets/img/icon_xin.png"
          alt=""
          class="state"
          v-else-if="item.type == 'new'"
        />
        <p class="counts">{{ item.counts }}万</p>
      </div>
      <p class="search-more">更多热搜 ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      search: [
        {
          id: 1,
          name: "华盛顿进入戒备状态",
          counts: 645.2,
          type: "boil"
        },
        {
          id: 2,
          name: "普京谈伊朗军官遇袭",
          counts: 444.1,
          type: "hot"
        },
        {
          id: 3,
          name: "滴滴暂停新司机审核",
          counts: 429.2,
          type: "new"
        },
        {
          id: 4,
          name: "马天宇举起张翰",
          counts: 407.7,
          type: "hot"
        },
        {
          id: 5,
          name: "李兰迪被气哭",
          counts: 391.1,
          type: "hot"
        },
        {
          id: 6,
          name: "国航回应泄露信息",
          counts: 331.9,
          type: "hot"
        },
        {
          id: 7,
          name: "12岁少年救整楼居民",
          counts: 324.8,
          type: "new"
        },
        {
          id: 8,
          name: "2020首场大范围雨雪",
          counts: 311.8,
          type: ""
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.search {
  .search-head {
    padding: 0 20px;
    .space {
      height: 160px;
    }
    .search-logo {
      display: block;
      margin: 0 auto;
    }
    .search-btn {
      margin-top: 30px;
      border: 1px solid black;
      display: flex;
      padding: 15px;
      justify-content: space-between;
      .search-btn-name {
        font-size: 18px;
        color: #999;
      }
    }
  }
  .search-main {
    padding: 20px;
    margin-top: 30px;
    .search-main-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 60px;
      }
      .title-desc {
        font-size: 14px;
        color: #999;
      }
    }
    .search-item {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      position: relative;
      .list {
        padding: 0 5px;
      }
      .name {
        margin-left: 10px;
      }
      .state {
        width: 15px;
        margin-left: 8px;
      }
      .counts {
        position: absolute;
        right: 0;
        font-size: 12px;
        color: #999;
      }
    
    }
    .search-more{
      margin-top: 15px;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
