<template>
  <div class="main">
    <div class="header">
      <router-link to="/game" class="return"></router-link>
      真心话大冒险
    </div>

    <div class="content">
      <div v-show="type===1" v-for="(v,i) in zx" @click="show(i)" :class="` ${i===active?'active':'card'}`">
        <div class="v-id"></div>
        <div class="slider"></div>
      </div>
      <div v-show="type===2" v-for="(v,i) in mx" @click="show(i)" :class="` ${i===active?'active':'card'}`">
        <div class="v-id"></div>
        <div class="slider"></div>
      </div>
    </div>

    <div class="notice">
      <div class="title">
        <h1>注/意/事/项</h1>
        <h2>MATTERS NEDING <p>ATTENTION</p></h2>
        <div class="divider"></div>
      </div>
      <div class="min">
        <p>1.先选真心话还是大冒险；</p>
        <p>2.再次从上方九宫格中选取一个点击打开，如果选中的无法实现，有一次机会重新选择。</p>
      </div>
    </div>
    <div class="footer">
      <div @click="setActive(1)" :class="{active:type==1}">真心话</div>
      <div @click="setActive(2)" :class="{active:type==2}">大冒险</div>
    </div>
    <div :class="`mask container ${mask?'active':''}`" v-show="mask">
      <div class="mask-con">
        <div class="subject">
          <div class="titles">
            <h2 v-text="maskTitle==='truth'?'大冒险 ':'真心话'"></h2>
            <p v-text="maskTitle==='truth'?'Crazy adventure ':'The truth of your heart'"></p>
          </div>
          <div class="contents" v-text="maskContent"></div>
          <div class="button" @click="once">在玩一次</div>
        </div>
        <div class="game-close" @click="close"></div>
      </div>
    </div>

  </div>
</template>
<style lang="scss" src="@/assets/style/game01.scss" scoped></style>

<script>
  var dict = {};
  var dict2 = {};
  export default{
    name: 'true',
    data: function () {
      return {
        type: 1,
        active: null,
        zx: [],
        mx: [],
        mask: false,
        maskTitle: '',
        maskContent: '',
      }
    },
    methods: {
      once: function () {
        this.mask = false;
      },
      close: function () {
        this.mask = false;
      },
      setActive: function (type) {
        type === 2 ? this.maskTitle = 'truth' : this.maskTitle = 'dare';

        this.type = type;
        this.active = null;
      },
      show: function (i, v) {
        this.active = i;
        this.open();
      },
      open: function (v) {

        if (this.type === 1) {
          if (Object.keys(dict).length >= 9) {
            dict = {};
          }
          do {
            var index = Math.floor(Math.random() * 9);
          } while (dict[index]);
          dict[index] = true;

          if (v === '') {
            this.mask = true;
            this.maskContent = '请先选择真心话或者大冒险';
          } else {
            this.mask = true;
            this.maskContent = this.zx[index].title;
          }
//          alert();
        } else if (this.type === 2) {
          if (Object.keys(dict2).length >= 9) {
            dict2 = {};
          }
          do {
            var index = Math.floor(Math.random() * 9);
          } while (dict2[index]);
          dict2[index] = true;
          if (v === '') {
            this.mask = true;
            this.maskContent = '请先选择真心话或者大冒险';
          } else {
            this.mask = true;
            this.maskContent = this.mx[index].title;
          }
        }
      }
    },
    mounted: function () {
      var data = {
        zx: [
          {id: 1, title: '你的初吻是几岁在什么地方被什么人夺去的?'},
          {id: 2, title: '你的初恋是几岁?'},
          {id: 3, title: '谈过几次恋爱？'},
          {id: 4, title: '你最怕的事情或东西是什么（说出三件）'},
          {id: 5, title: '你会不会在意ta的过去，为什么？ '},
          {id: 6, title: '现在心里最在意的异性叫什么名字？'},
          {id: 7, title: '你在意你的老婆（老公）不是处女（处男）吗？'},
          {id: 8, title: '和多少异性有过非恋爱的暧昧关系?'},
          {id: 9, title: '从小到大最丢脸出丑的事情是什么？'}
        ],
        mx: [
          {id: 1, title: '背一位异性绕场一周'},
          {id: 2, title: '唱青藏高原最后一句'},
          {id: 3, title: '抱一位异性直到下一轮真心话大冒险结束'},
          {id: 4, title: '与一位异性十指相扣，对视10秒'},
          {id: 5, title: '做自己最性感、最妩媚的表情或动作'},
          {id: 6, title: '模仿脑白金广告，边唱边跳'},
          {id: 7, title: '一人先用嘴吸住一纸牌，另一人用嘴从另一面将纸牌吸住移走;'},
          {id: 8, title: '两人面对面作搓澡状，屁股还要一扭一扭的，还要唱"洗刷刷，洗刷刷";'},
          {id: 9, title: '左手拉右耳，右手拉左耳，从桌子底下过'}
        ]
      };
      this.zx = data.zx;
      this.mx = data.mx;
    }
  }
</script>
