<template>
  <ul class="wine">
    <li class="item" v-for="(item,index) in msg" :key="item.id">
      <div class="img-bg">
        <div class="pic" :style="`background: url(${item.pic})no-repeat center/cover`"></div>
      </div>
      <ul class="dataBox">
        <li class="name">
          <span>{{item.name}}</span>
          <div v-for="star in item.star"></div>
        </li>
        <!--<li class="title">-->
        <!--<span>{{item.title}}</span>-->
        <!--</li>-->
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
<style lang="scss" src="@/assets/style/food.scss" scoped></style>

<script>
  export default{
    name: "food",
    data: function () {
      return {
        msg: [
          {
            id: 4,
            name: "CHIL",
            title: "可以让你飞的鸡尾酒",
            num: 0,
            type: 6,
            star: [1, 1, 1],
            price: 3.6,
            pic: "/static/imgs/store/01.png"
          },
          {
            id: 5,
            name: "MUIC",
            title: "可以让你飞的鸡尾酒",
            num: 0,
            type: 6,
            star: [1, 1, 1],
            price: 2.8,
            pic: "/static/imgs/store/05.png"
          },
          {
            id: 6,
            name: "CHIL",
            title: "可以让你飞的鸡尾酒",
            num: 0,
            type: 6,
            star: [1, 1],
            price: 1.8,
            pic: "/static/imgs/store/06.png"
          },
          {
            id: 7,
            name: "CHIL",
            title: "可以让你飞的鸡尾酒",
            num: 0,
            type: 6,
            star: [1, 1],
            price: 1.8,
            pic: "/static/imgs/store/06.png"
          },
          {
            id: 8,
            name: "CHIL",
            title: "可以让你飞的鸡尾酒",
            num: 0,
            type: 6,
            star: [1, 1],
            price: 1.8,
            pic: "/static/imgs/store/06.png"
          },
          {
            id: 9,
            name: "CHIL",
            title: "可以让你飞的鸡尾酒",
            num: 0,
            type: 6,
            star: [1, 1],
            price: 1.8,
            pic: "/static/imgs/store/06.png"
          }
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

