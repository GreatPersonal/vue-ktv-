<template>
  <div class="link">
    <div class="head">
      房间链接
      <div class="return" @click="back"></div>
    </div>
    <div class="content"></div>
    <div class="prompt">扫一扫进入房间</div>
  </div>
</template>

<script>
  import router from '@/router/index';
  export default{
    name: "link",
    data: function () {
      return {}
    },
    methods: {
      back: function () {
        router.push({name: 'Home'})
      }
    }
  }
</script>

<style scoped>
  .link {
    width: 100%;
    height: 100vh;
    background: #F5F3FF url("/static/imgs/gameLinkBac.png") no-repeat center top/100% auto;
    padding: 0 0.24rem;
  }

  .head {
    width: 100%;
    height: 0.88rem;
    font-size: 0.34rem;
    color: #fff;
    text-align: center;
    line-height: 0.88rem;
    letter-spacing: 0.02rem;
    position: relative;
  }

  .head .return {
    width: 0.4rem;
    height: 0.4rem;
    background: url("/static/imgs/return.png") no-repeat center/100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .content {
    width: 100%;
    height: 10rem;
    background: url("/static/imgs/code.png") no-repeat center/5rem;
  }

  .prompt {
    width: 3.4rem;
    height: 0.85rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 0.4rem;
    color: #F22A8D;
    font-size: 0.28rem;
    line-height: 0.85rem;
    font-weight: bold;
  }

</style>
