<template>
  <div class="store">
    <div class="head">
      发现
      <div class="return" @click="back">
      </div>
    </div>

    <ul class="choice">
      <li :class="`item  ${(type==1)?'active right':''}`" @click="setActive(1)">
        <span>酒水</span>
        <span class="num">{{wine_total}}</span>
      </li>
      <li :class="`item  ${(type==2)?'active left':''}`" @click="setActive(2)">
        <span>零食</span>
        <span class="num">{{food_total}}</span>
      </li>
    </ul>
    <div v-show="type==1">
      <wine @add="add" @remove="remove"/>
    </div>
    <div v-show="type==2">
      <food @add="add" @remove="remove"/>
    </div>
    <div class="footer">
      <div class="choiced">
        <div class="span">已选</div>
        <div class="choice-item">
          <div class="item" :key="i" v-for="(v,i) in choiceList" @click="remove(v.id)">
            <span>{{v.name}}</span>
            <span>{{v.num}}/瓶</span>
          </div>
        </div>
        <div class="more">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
      </div>
      <div class="bottom">
        <div class="result">
          <span class="span">合计</span>
          <span class="num">{{total}}</span>
          <span class="rmb">RMB</span>
        </div>
        <router-link :to="{name:'Choised',query:{ch:choiceList}}" class="submit">
          <span>选好了</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="@/assets/style/store.scss" scoped></style>
<script>
  import router from '@/router/index';
  import wine from '@/components/Wine';
  import food from '@/components/Food';
  export default{
    name: "store",
    components: {wine, food},
    data: function () {
      return {
        type: 1,
        choiceList: []
      }
    },
    computed: {
      wine_total: function () {
        var r = 0;
        this.choiceList.forEach(function (v) {
          if (v.type == 5) {
            r += v.num
          }
        });
        return r;
      },
      food_total: function () {
        var r = 0;
        this.choiceList.forEach(function (v) {
          if (v.type == 6) {
            r += v.num
          }
        });
        return r;
      },
      total: function () {
        var r = 0;
        this.choiceList.forEach(function (v) {
          r += v.price * v.num;
        });
        return r.toFixed(2);
      }
    },
    methods: {
      back: function () {
        router.push({name: 'classify'})
      },
      setActive: function (type) {
        this.type = type;
      },
      add: function (good) {
        var has = this.choiceList.filter(function (v) {
          return v.id == good.id;
        });
        if (!has.length) {
          this.choiceList.push(good);
        }
      },
      remove: function (id) {

        this.choiceList = this.choiceList.filter(function (v) {
          if (id === v.id) {
            v.num = 0
          }
          return v.id !== id;
        });

      }
    }
  }
</script>

