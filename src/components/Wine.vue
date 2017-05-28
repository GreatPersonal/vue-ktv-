<template>
  <ul class="wine">
    <li class="item" v-for="(item,index) in msg" :key="item.id">
      <div class="pic">
        <img :src="item.pic" alt="">
      </div>
      <ul class="dataBox">
        <li class="name">
          <span>{{item.name}}</span>
          <div v-for="star in item.star"></div>
        </li>
        <li class="price">
          <span class="symble">￥</span>
          <span class="num">{{item.price}}</span>
          <span>/瓶</span>
        </li>
        <li class="operate">
          <div class="subtract" @click="subtract(index)"></div>
          <div class="num">{{item.num}}</div>
          <div class="plus" @click="plus(index)"></div>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style lang="scss" src="@/assets/style/wine.scss" scoped></style>
<script>
  export default{
    name: "wine",
    data: function () {
      return {
        msg: [
          {id: 1, name: "HELMSAN啤酒", type: 5, num: 0, star: [1, 1, 1], price: 8.6, pic: "/static/imgs/store/01.png"},
          {id: 2, name: "SNUEDAN啤酒", type: 5, num: 0, star: [1, 1, 1], price: 9.8, pic: "/static/imgs/store/02.png"},
          {id: 3, name: "MSAN啤酒", type: 5, num: 0, star: [1, 1], price: 9.8, pic: "/static/imgs/store/03.png"},
          {id: 10, name: "MSAN啤酒", type: 5, num: 0, star: [1, 1], price: 9.8, pic: "/static/imgs/store/03.png"},
          {id: 11, name: "MSAN啤酒", type: 5, num: 0, star: [1, 1], price: 9.8, pic: "/static/imgs/store/03.png"},
          {id: 12, name: "MSAN啤酒", type: 5, num: 0, star: [1, 1], price: 9.8, pic: "/static/imgs/store/03.png"},
          {id: 13, name: "MSAN啤酒", type: 5, num: 0, star: [1, 1], price: 9.8, pic: "/static/imgs/store/03.png"},
          {id: 14, name: "MSAN啤酒", type: 5, num: 0, star: [1, 1], price: 9.8, pic: "/static/imgs/store/03.png"}
        ]
      }
    },
    methods: {
      plus: function (index) {
        this.msg[index].num += 1;
        this.$emit('add', this.msg[index]);
      },
      subtract: function (index) {
        this.msg[index].num -= 1;
        if (this.msg[index].num <= 0) {
          this.msg[index].num = 0;
          this.$emit('remove', this.msg[index].id);
        }
      }
    }
  }
</script>

