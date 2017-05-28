<template>
  <div class="songs" :style="'backgroundImage: url(/static/imgs/'+singer[$route.params.id].pic+'.png)'
  ">
    <div class="songs-wrap">
      <div class="nav">
        <div class="back" @click="back"><i></i></div>
        <div class="nav-content">
          <h2>{{singer[$route.params.id].name}}</h2>
        </div>
        <router-link :to="{path:'/checked'}" class="checked">
          <h2>已点歌曲</h2>
        </router-link>
      </div>
      <div class="title">
        <div class="img-wrap">
          <div class="wrap"></div>
          <div class="img-bg">
            <img class="singer-bg" :src="'/static/imgs/'+singer[$route.params.id].pic+'.png'" alt="">
          </div>
        </div>
        <ul class="singer-message">
          <li><h2>{{singer[$route.params.id].name}} — {{singer[$route.params.id].classify}}</h2></li>
          <li><i></i>
            <h3>歌曲: {{singer[$route.params.id].count}}</h3><i></i>
            <h3>MV: {{singer[$route.params.id].mv}}</h3></li>
          <li><i></i></li>
          <li><h3>本月点击量: {{singer[$route.params.id].hit}}</h3></li>
        </ul>
      </div>
      <DisplaySongs :songs="songs"></DisplaySongs>
    </div>
  </div>
</template>
<style lang="scss" src="../assets/style/songs.scss"></style>
<script>
  import router from '@/router/index'
  import DisplaySongs from './DisplaySongs';
  var singer = [
    {
      id: 1,
      name: '蔡妍',
      num: '382',
      path: 'lyrics',
      classify: '日韩女歌手',
      count: '92',
      mv: '105',
      pic: 'singer-1',
      hits: '49080'
    },
    {
      id: 2,
      name: '林夕',
      num: '463',
      path: 'lyrics',
      classify: '内地男歌手',
      count: '92',
      mv: '105',
      pic: 'singer-2',
      hits: '29082'
    },
    {
      id: 3,
      name: '王菲',
      num: '382',
      path: 'lyrics',
      classify: '内地女歌手',
      count: '92',
      mv: '105',
      pic: 'singer-3',
      hits: '49083'
    },
    {
      id: 4,
      name: '那英',
      num: '298',
      path: 'lyrics',
      classify: '内地女歌手',
      count: '92',
      mv: '105',
      pic: 'singer-4',
      hits: '590845'
    },
    {
      id: 5,
      name: '孙燕姿',
      num: '367',
      path: 'lyrics',
      classify: '港台歌手',
      count: '92',
      mv: '105',
      pic: 'singer-5',
      hits: '9085'
    },
    {
      id: 6,
      name: '莫文蔚',
      num: '567',
      path: 'lyrics',
      classify: '港台歌手',
      count: '92',
      mv: '105',
      pic: 'singer-6',
      hits: '55567'
    },
    {
      id: 7,
      name: '张惠妹',
      num: '382',
      path: 'lyrics',
      classify: '港台歌手',
      count: '92',
      mv: '105',
      pic: 'singer-7',
      hits: '494547'
    },
    {
      id: 8,
      name: '叮当',
      num: '382',
      path: 'lyrics',
      classify: '内地女歌手',
      count: '92',
      mv: '105',
      pic: 'singer-8',
      hits: '3394'
    },
    {
      id: 9,
      name: '蔡妍',
      num: '382',
      path: 'lyrics',
      classify: '日韩女歌手',
      count: '92',
      mv: '105',
      pic: 'singer-9',
      hits: '2640'
    }
  ];
  export default {
    name: 'songs',
    data () {
      return {
        num: '',
        singer: singer,
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
        newSing: []
      }
    },
    components: {DisplaySongs},
    methods: {
      back: function () {
        router.go(-1)
      },
      taps: function (index) {
        this.num = index
      },
      tab: function (index, value) {
        this.num = index;
        let that = this;
        if (this.songs[index].active === '') {
          //用来判断是不是已点歌曲
          this.songs[index].active = 'active';
          //遍历数组把id相同的值放到新数组
          this.songs.forEach(function (v) {
            if (v.id === value
            ) {
              return that.newSing.push(v);
            }
            that.newSing.filter(function (item) {
              return item.id !== v.id;
            });
            //把新数组存储到本地.在已读页面加载完毕时读取
            localStorage.sings = JSON.stringify(that.newSing);
          })
        } else {
          this.songs[index].active = '';
        }
      }
    },
    mounted: function () {
      let that = this;
      if (localStorage.sings) {
        //读取存储的数组
        let num = JSON.parse(localStorage.sings);
        //同步要不会覆盖
        this.newSing = num;
        //便利不然刷新会消失
        num.forEach(function (v) {
          that.songs.forEach(function (s) {
            if (s.id === v.id
            ) {
              return s.active = 'active'
            }
          })
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
