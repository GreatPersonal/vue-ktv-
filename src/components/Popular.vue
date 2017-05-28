<template>
  <div class="popular">
    <DisplaySongs :songs="songs"></DisplaySongs>
  </div>
</template>

<script>
  import DisplaySongs from './DisplaySongs.vue';
  export default {
    name: 'popular',
    components: {DisplaySongs},
    data: function () {
      return {
        songs: [
          {id: '01', name: '歌手与演员', songTime: "04''52'", pic: '/static/imgs/singer-1.png'},
          {id: '02', name: '成都', songTime: "04''52'", pic: '/static/imgs/singer-2.png'},
          {id: '03', name: '漂洋过海来看你', songTime: "04''52'", pic: '/static/imgs/singer-3.png'},
          {id: '04', name: '告白气球', songTime: "04''52'", pic: '/static/imgs/singer-4.png'},
          {id: '05', name: '易燃易爆炸', songTime: "04''52'", pic: '/static/imgs/singer-5.png'},
          {id: '06', name: '不醉不归', songTime: "04''52'", pic: '/static/imgs/singer-6.png'},
          {id: '07', name: '没时间', songTime: "04''52'", pic: '/static/imgs/singer-7.png'},
          {id: '08', name: '小幸运', songTime: "04''52'", pic: '/static/imgs/singer-8.png'}
        ],
      }
    }
  }
</script>

<style scoped>
  .popular {

  }

  .content {
    width: 100%;
    margin-top: 0.1rem;
  }

  .content .item {
    width: 100%;
    height: 1.56rem;
    border-bottom: 1px dashed #B7B7B7;
    display: flex;
    align-items: center;
  }

  .item .pic {
    width: 1.16rem;
    height: 100%;
    position: relative;
  }

  .item .pic .tiltBlock, .block {
    width: 1.03rem;
    height: 1.03rem;
    border-radius: 0.1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .item .pic .tiltBlock {
    background: #E9A6CF;
    transform: rotateZ(10deg);
    left: 0.07rem;
  }

  .item .pic .block {
    background: #fff;
    padding: 2px;
    left: 0;
  }

  .item .pic .block img {
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
  }

  .item .songData {
    flex: 1;
    text-align: left;
    padding-left: 0.28rem;
    line-height: 0.3rem;
  }

  .item .name {
    display: block;
    font-size: 0.24rem;
    color: #58606D;
  }

  .item .during {
    display: block;
    font-size: 0.22rem;
    color: #C6C6C6;
  }

  .item .function {
    width: 1.18rem;
    height: 0.47rem;
    background: url("/static/img/Music/pinkPlus.png") no-repeat right top/0.47rem 0.47rem;
  }

  .item .function.active {
    background: url("/static/img/Music/again.png") no-repeat right top/1.18rem 0.47rem;
  }
</style>

