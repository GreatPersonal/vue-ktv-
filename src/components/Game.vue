<template>
  <div class="game">
    <div class="head">
      游戏
      <div class="return" @click="back"></div>
    </div>
    <ul class="content">
      <li class="item">
        <router-link to="/game/game01">
          <img src="/static/imgs/game.png" alt="">
        </router-link>
        <div class="title">真心话大冒险</div>
      </li>

      <!--<li class="item">-->
      <!--<img src="/static/img/Game/02.png" alt="">-->
      <!--</li>-->
      <!--<li class="item">-->
      <!--<img src="/static/img/Game/03.png" alt="">-->
      <!--</li>-->
      <!--<li class="item">-->
      <!--<img src="/static/img/Game/04.png" alt="">-->
      <!--</li>-->
    </ul>
  </div>
</template>
<style lang="scss" src="@/assets/style/game.scss" scoped></style>

<script>
  import router from '@/router/index';
  export default{
    name: "game",
    data: function () {
      return {}
    },
    methods: {
      back: function () {
        router.push({name: 'classify'})
      }
    }
  }
</script>

