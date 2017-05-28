<template>
  <div id="me">
    <header>
      <div class="back" @click="back"></div>
      <h5> · 个人中心 · </h5>
    </header>
    <section id="main">
      <div class="avatar" :style="`background:#fff url(/static/imgs/header-bg.png)no-repeat center /cover`">
        <div class="username">
          李家琦
        </div>
        <span></span>
      </div>
      <ul class="car">
        <li class="car-name">甲壳虫</li>
        <li class="car-enName">DAZHONG JIA KE CHONG</li>
        <li>99868B728</li>
      </ul>
      <ul class="floow">
        <li v-for="v in floow" :key="v.id" :style="`background:url(${v.bg}) no-repeat center/cover`">
          <strong class="number"> {{v.number}} </strong>
          <span> {{v.name}}</span>
        </li>
      </ul>
      <div class="my-work">我的作品</div>
      <ul class="songs">
        <li v-for="v in songList">
          <p class="name-songName">
            <span>{{v.name}}</span>—<span>{{v.songName}}</span>
          </p>
          <p class="time">{{v.time}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import router from '@/router/index'
  export default{
    name: 'game',
    data(){
      return {
        floow: [
          {id: 0, name: '关注', number: 925, bg: '/static/img/floow-bg_07.png'},
          {id: 1, name: '我的粉丝', number: 2, bg: '/static/img/floow-bg_09.png'},
          {id: 2, name: '订单', number: 96, bg: '/static/img/floow-bg_11.png'},
        ],
        songList: [
          {id: 0, name: '幸福像花儿一样', songName: '赵磊', time: '4."55"'},
          {id: 1, name: '幸福像花儿一样', songName: '赵磊', time: '4."55"'},
          {id: 2, name: '幸福像花儿一样', songName: '赵磊', time: '4."55"'},
          {id: 3, name: '幸福像花儿一样', songName: '赵磊', time: '4."55"'},
          {id: 4, name: '幸福像花儿一样', songName: '赵磊', time: '4."55"'},
        ]
      }
    },
    methods: {
      back: function () {
        router.push({name: 'classify'})

      }
    }

  }
</script>
<style lang="scss" scoped>
  #me {
    width: 100%;
    padding: 0 0.24rem 0.24rem;
    box-sizing: border-box;
    background: url("/static/img/me-bg.jpg") no-repeat center/cover;
  }

  header {
    width: 100%;
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  header h5 {
    width: 96%;
    color: #fff;
    font-size: 0.36rem;
    font-weight: 600;
  }

  header .back {
    width: 0.4rem;
    height: 0.4rem;
    background: url('/static/imgs/back.png') no-repeat center/cover;
  }

  #main {
    position: relative;
    width: 100%;
    background: url("/static/img/me-main-bg.png") no-repeat center/cover;
  }

  #main .avatar {
    position: absolute;
    right: 0.5rem;
    top: -0.8rem;
    width: 1.6rem;
    height: 1.6rem;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(10, 22, 245, 0.2);
  }

  #main .avatar .username {
    position: absolute;
    left: -50%;
    top: 10%;
    width: 100%;
    height: 0.86rem;
    color: #fff;
    font-size: 0.24rem;
    display: flex;
  }

  #main .avatar span {
    position: absolute;
    right: 0rem;
    bottom: 0rem;
    width: 0.44rem;
    height: 0.44rem;
    background: url("/static/img/update.png") no-repeat center/cover;
  }

  #main .car {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 1.25rem;
    padding-right: 0.45rem;
    display: flex;
    height: 0.95rem;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-end;
  }

  .car li {
    padding-right: 0.46rem;
    font-size: 0.2rem;

  }

  .car .car-name {
    color: #22b0fc;
    font-size: 0.3rem;
    /*font-weight: 600;*/
  }

  .car .car-enName {
    color: #22b0fc;
    font-size: 0.16rem;
    font-weight: 600;
  }

  #main .floow {
    width: 100%;
    height: 1.98rem;
    padding: 0.38rem 0.15rem 0.38rem 0.15rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .floow li {
    width: 2.19rem;
    height: 1.26rem;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 7px 0px rgb(240, 240, 255);
  }

  .floow li strong {
    padding: 0.18rem;
    color: #ff2888;
    font-size: 0.48rem;
  }

  .floow li span {
    color: #22b0fc;
    font-size: 0.26rem;
  }

  #main .songs {
    width: 100%;
    overflow-x: hidden;
    padding: 10px 0.24rem;
  }

  #main .my-work {
    text-align: left;
    width: 100%;
    height: auto;
    padding: 0 0.24rem;
    box-sizing: border-box;
    font-size: 0.3rem;
    color: #f81f86;
    font-weight: 600;
  }

  #main .songs li {
    height: 1.15rem;
    width: 100%;
    border-bottom: 0.01rem dashed #bdbdbd;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  #main .songs li:last-child {
    border: none;
  }

  .songs li p {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
  }

  .songs li p.name-songName {
    color: #89919e;
    font-size: 0.26rem;
  }

  .songs li p.time {
    color: #c6c6c6;
    font-size: 0.24rem;
  }
</style>
