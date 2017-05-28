<template>
  <div class="songslist">

    <div class="music_item1">
      <p class="music_item1_back" @click="back">
        <img src="/static/imgs/back.png" alt="">
      </p>
      <p class="music_item1_singer">
        {{$route.query.v.name}}
      </p>
      <p class="music_item1_backs">共<i>{{all}}</i>首</p>
    </div>
    <DisplaySongs :songs="songs"></DisplaySongs>
    <!--<ul class="content">-->

    <!--<div class="rank_songs">-->
    <!--<div class="rank_song" v-for="v in list" :key="v.id">-->
    <!--<p>-->
    <!--<img class="pimg1" :src="`${v.src}`" alt="">-->
    <!--</p>-->
    <!--<div class="rank_song_item">-->
    <!--<h5>{{v.name}}</h5>-->
    <!--<h6>{{v.time}}</h6>-->
    <!--</div>-->
    <!--<img class="img" src="/static/imgs/lxj_list_add_10.png" alt="">-->
    <!--</div>-->

    <!--</div>-->
    <!--</ul>-->
  </div>
</template>
<style lang="scss" src="@/assets/style/songslist.scss" scoped></style>
<script>
  //  console.log($router.query.v)
  import router from '@/router/index'
  import DisplaySongs from './DisplaySongs.vue'
  export default{
    name: "songslist",
    components: {DisplaySongs},
    data: function () {
      return {
        lists: [
          {
            id: 0,
            name: '摔跤吧，爸爸',

          },
          {
            id: 1,
            name: '青春励志歌曲',

          },
          {
            id: 2,
            name: '一人一首成名曲',

          },
          {
            id: 3,
            name: '成名曲',

          },
        ],
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
        list: [
          {
            id: 0,
            name: '歌手与演员-李荣浩',
            num: 1,
            src: '/static/imgs/lxj-rank-list1_03.png',
            time: ' 04”52’ '
          },
          {
            id: 1,
            name: '歌手与演员-李荣浩',
            num: 1,
            src: '/static/imgs/lxj-rank-list2_06.png',
            time: ' 04”52’ '
          },
          {
            id: 2,
            name: '歌手与演员-李荣浩',
            num: 1,
            src: '/static/imgs/lxj-rank-list3_08.png',
            time: ' 04”52’ '
          },
          {
            id: 3,
            name: '歌手与演员-李荣浩',
            num: 1,
            src: '/static/imgs/lxj-rank-list4_10.png',
            time: ' 04”52’ '
          },
          {
            id: 4,
            name: '歌手与演员-李荣浩',
            num: 1,
            src: '/static/imgs/lxj-rank-list1_03.png',
            time: ' 04”52’ '
          },
          {
            id: 5,
            name: '歌手与演员-李荣浩',
            num: 1,
            src: '/static/imgs/lxj-rank-list2_06.png',
            time: ' 04”52’ '
          },
          {
            id: 6,
            name: '歌手与演员-李荣浩',
            num: 1,
            src: '/static/imgs/lxj-rank-list3_08.png',
            time: ' 04”52’ '
          },

        ]
      }
    },
    computed: {
      all: function () {
        var r = 0;

        this.list.forEach(function (v, i) {
          r += v.num;

        });
        return r;

      }
    },
    methods: {
      back: function () {
//          console.log(this.$route.name)
//        if(this.$route.name==='artist_list'){
        router.go(-1);
//        }else{
//          router.push({name:'main'});
//        }
      }

    },
  }
</script>
<style scoped>

</style>
