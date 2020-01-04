<template>
  <div class="cross">
    <div class="cross-head">
      <router-link to="/">
        <img src="../assets/img/back.png" alt="" class="back"/>
      </router-link>
      <p class="cross-title">频道管理</p>
    </div>
    <div class="cross-main">
      <p class="cross-title">点击删除以下频道</p>
      <div class="cross-box">
        <div class="cross-flex">
          <p
            class="cross-item"
            v-for="(item, index) of crossReserve"
            :key="index"
            @click="changeDead(index)"
          >
            <span>
              {{ item.name }}
            </span>
          </p>
        </div>
      </div>
      <p class="cross-title">点击添加以下频道</p>
      <div class="cross-flex">
        <p
          class="cross-item"
          v-for="(item, index) of crossThrow"
          :key="index"
          @click="changeActive(index)"
        >
          <span>
            {{ item.name }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cross",
  data() {
    return {
      crossReserve: [
        {
          id: 1,
          name: "推荐"
        }
      ],
      crossThrow: [
        {
          id: 2,
          name: "美文 "
        },
        {
          id: 3,
          name: "军事"
        },
        {
          id: 4,
          name: "娱乐"
        },
        {
          id: 5,
          name: "热点"
        },
        {
          id: 6,
          name: "体育"
        },
        {
          id: 7,
          name: "社会"
        },
        {
          id: 8,
          name: "旅游"
        },
        {
          id: 9,
          name: "时尚"
        },
        {
          id: 10,
          name: "财经"
        },
        {
          id: 11,
          name: "游戏"
        },
        {
          id: 12,
          name: "育儿"
        },
        {
          id: 13,
          name: "养生"
        },
        {
          id: 14,
          name: "历史"
        },
        {
          id: 15,
          name: "美食"
        },
        {
          id: 16,
          name: "故事"
        },
        {
          id: 17,
          name: "汽车"
        },
        {
          id: 18,
          name: "探索"
        },
        {
          id: 19,
          name: "科技"
        },
        {
          id: 20,
          name: "国际"
        }
      ]
    };
  },
  methods: {
    changeDead(index) {
      if (this.crossReserve[index].id == 1) {
        return;
      }
      let dead = this.crossReserve.splice(index, 1);
      this.crossThrow.push(dead[0]);
    },
    changeActive(index) {
      let active = this.crossThrow.splice(index, 1);
      this.crossReserve.push(active[0]);
    }
  }
};
</script>

<style lang="less" scoped>
.cross {
  .cross-head {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d43d3d;
    padding: 15px;
    position: relative;
    .back {
      width: 22px;
      position: absolute;
      left: 15px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    .cross-title {
      color: #fff;
      font-weight: bold;
    }
  }
  .cross-main {
    .cross-title {
      font-size: 12px;
      color: #333;
      padding: 5px 10px;
    }
    .cross-flex {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .cross-item {
        box-sizing: border-box;
        width: 25%;
        text-align: center;
        span {
          border: 1px solid rgba(0, 0, 0, 0.2);
          display: block;
          padding: 5px 10px;
          margin: 5px 10px;
        }
      }
    }
  }
}
</style>
