<template>
  <div class="indexBar">
    <swiper :options="indexOptions">
      <swiper-slide v-for="(item, index) of tag" :key="index">
        <div
          class="index-item"
          @click="seleted(index)"
          :class="{ seleted: x == index }"
        >
          {{ item.name }}
        </div>
      </swiper-slide>
    </swiper>
      <div class="add-btn">
        <img src="../assets/img/leftShadow.png" alt="" class="shadow" />
    <router-link to="/cross">
        <img src="../assets/img/add.png" alt="" class="add" />
    </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "indexBar",
  data() {
    return {
      indexOptions: {
        freeMode: true,
        width: 70,
        spaceBetween: -13,
        slidesOffsetAfter: -270
      },
      x: 0,
      tag: [
        {
          id: 1,
          name: "推荐"
        },
        {
          id: 2,
          name: "游戏"
        },
        {
          id: 3,
          name: "娱乐"
        },
        {
          id: 4,
          name: "科技"
        },
        {
          id: 5,
          name: "财经"
        },
        {
          id: 6,
          name: "军事"
        },
        {
          id: 7,
          name: "国际"
        }
      ]
    };
  },
  methods: {
    seleted(index) {
      this.x = index;
    }
  }
};
</script>

<style lang="less" scoped>
@main-color: #f85959;
.indexBar {
  width: 100%;
  position: fixed;
  top: 49px;
  background-color: rgb(244, 245, 246);
  display: flex;
  align-items: center;
  .add-btn {
    position: absolute;
    right: -1px;
    top:1px;
    bottom: 0;
    // margin: auto 0;
    display: flex;
    align-items: center;
    background-color: rgb(244, 245, 246);
    z-index: 1;
    .shadow {
      width:10px;
      position: absolute;
      left: -10px;
    }
    .add {
      width: 15px;
      padding: 10px 14px;
    }
  }
  .index-item {
    padding: 10px 15px;
    font-size: 17px;
    color: #444;
  }
  .seleted {
    color: @main-color;
  }
}
</style>
