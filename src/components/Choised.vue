<template>
  <div class="choised">
    <div class="head">
      <div class="title">
        <div class="point"></div>
        <span class="room">{{room}}</span>
        <span class="word">房间已选商品</span>
        <div class="point"></div>
      </div>
      <div class="totalNum">
        <span>共</span>
        <span class="num">{{total}}</span>
        <span>件</span>
      </div>
      <div class="return" @click="back"></div>
    </div>
    <ul class="content">
      <li class="item" v-for="(item,index) in msg" :key="item.id">
        <div class="pic">
          <img :src="item.pic" alt="" width="80%"
               height="80%">
        </div>
        <ul class="dataBox">
          <li class="name">
            <span>{{item.name}}</span>
          </li>
          <li class="describe">
            <span class="word">{{item.describe}}</span>
            <span class="v">{{'350ml'}}</span>
          </li>
          <li class="operate">
            <div class="subtract" @click="subtract(index)"></div>
            <div class="num">{{item.num}}</div>
            <div class="plus" @click="plus(index)"></div>
            <div class="price">
              <span class="span">{{item.price}}</span>
              <div class="rmb">RMB</div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <div class="total">
      <div class="left">TOTAL</div>
      <div class="division"></div>
      <div class="right">
        <div class="word">
          <div>总价</div>
          <div class="rmb">RMB</div>
        </div>
        <div class="num">{{totalPrice}}</div>
      </div>
    </div>
    <router-link to="/store/success" class="submit">确认提交</router-link>
  </div>
</template>
<style lang="scss" src="@/assets/style/choised.scss" scoped></style>

<script>
  import router from '../router/index';
  export default{
    name: "choised",
    data: function () {
      return {
        room: "0806",
        msg: this.$route.query.ch
      }
    },
    computed: {
      total: function () {
        var r = 0;
        this.msg.forEach(function (v) {
          r += v.num
        });
        return r;
      },
      totalPrice: function () {
        var r = 0;
        this.msg.forEach(function (v) {
          r += v.price * v.num
        });
        return r.toFixed(2);
      }
    },
    methods: {
      back: function () {
        router.push("/store");
      },
      plus: function (index) {
        this.msg[index].num += 1;
      },
      subtract: function (index) {
        this.msg[index].num -= 1;
        if (this.msg[index].num <= 0) {
          this.msg.splice(index, 1);
        }
      }
    }
  }
</script>

