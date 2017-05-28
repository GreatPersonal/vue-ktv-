<template>
  <div class="ly-bg" :style="'background:url(/static/imgs/'+singer[$route.params.id].pic+'.png)no-repeat center/cover'">
    <div class="lyrics">
      <div class="nav">
        <div class="back" @click="back"></div>
        <div class="nav-content" @click="click">
          <h2>{{songs[parseInt($route.params.num - 1)].name}}-{{singer[$route.params.id].name}}</h2>
        </div>
      </div>
      <ul class="lyrics-con">
        <li v-for="v in lyrics" @click="change">{{v.name}}</li>
      </ul>
      <ul class="btns">
        <li><i></i><span>原/伴</span></li>
        <li><i></i><span>切歌</span></li>
        <li><i></i></li>
        <li><i></i><span>重唱</span></li>
        <li><i></i><span>录歌</span></li>
      </ul>
      <div class="voice">
        <div class="voice-1">
          <div class="bg-voc-1"></div>
          <vue-slider class="vol-1" event-type="touch"
                      style="width:5.12rem;display:inline-block;height: 0.05rem;padding:0;"
                      :tooltip="false"
                      v-model="micro_volume">
          </vue-slider>
        </div>
        <div class="voice-2">
          <div class="bg-voc-2"></div>
          <vue-slider class="vol-2"
                      style="width:5.12rem;display:inline-block;padding:15px 10px;"
                      :tooltip="false"
                      v-model="volume">
          </vue-slider>
          <div class="circle-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="@/assets/style/lyrics.scss"></style>
<script>
  import router from '@/router/index'
  import VueSlider from 'vue-slider-component'
  export default {
    components: {
      VueSlider
    },
    data () {
      return {
        micro_volume: 100,
        volume: 80,
        songs: [
          {id: '01', name: '歌手与演员', songTime: "04''52'"},
          {id: '02', name: '成都', songTime: "04''52'"},
          {id: '03', name: '漂洋过海来看你', songTime: "04''52'"},
          {id: '04', name: '告白气球', songTime: "04''52'"},
          {id: '05', name: '易燃易爆炸', songTime: "04''52'"},
          {id: '06', name: '不醉不归', songTime: "04''52'"},
          {id: '07', name: '没时间', songTime: "04''52'"},
          {id: '08', name: '小幸运', songTime: "04''52'"},
        ],
        singer: [
          {
            id: 1,
            name: '蔡妍',
            num: '382',
            path: 'songs',
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
            path: 'songs',
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
            path: 'songs',
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
            path: 'songs',
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
            path: 'songs',
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
            path: 'songs',
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
            path: 'songs',
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
            path: 'songs',
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
            path: 'songs',
            classify: '日韩女歌手',
            count: '92',
            mv: '105',
            pic: 'singer-9',
            hits: '2640'
          }
        ],
        lyrics: [
          {name: '你停在了这条我们熟悉的街'},
          {name: '把你准备好的台词全念一遍'},
          {name: '我还在逞强 说着谎'},
          {name: '也没能力遮挡 你去的方向'},
          {name: '至少分开的时候我落落大方'},
          {name: '我后来都会选择绕过那条街'},
          {name: '又多希望在另一条街能遇见'},
          {name: '思念在逞强 不肯忘'},
          {name: '怪我没能力跟随 你去的方向'},
          {name: '若越爱越被动 越要落落大方'},
          {name: '你还要我怎样 要怎样'},
          {name: '你突然来的短信就够我悲伤'},
          {name: '我没能力遗忘 你不用提醒我'},
          {name: '哪怕结局就这样'},
          {name: '我还能怎样 能怎样'},
          {name: '最后还不是落得情人的立场'},
          {name: '你从来不会想 我何必这样'},
          {name: '我慢慢地回到自己的生活圈'},
          {name: '也开始可以接触新的人选'},
          {name: '爱你到最后 不痛不痒'},
          {name: '留言在计较 谁爱过一场'},
          {name: '我剩下一张 没后悔的模样'},
          {name: '你还要我怎样 要怎样'},
          {name: '你千万不要在我婚礼的现场'},
          {name: '我听完你爱的歌 就上了车'},
          {name: '爱过你很值得'},
          {name: '我不要你怎样 没怎样'},
          {name: '我陪你走的路你不能忘'},
          {name: '因为那是我 最快乐的时光'},
          {name: '后来我的生活还算理想'},
          {name: '没为你落到孤单的下场'},
          {name: '有一天晚上 梦一场'},
          {name: '你白发苍苍 说带我流浪'},
          {name: '我还是没犹豫 就随你去天堂'},
          {name: '不管能怎样 我能陪你到天亮'}
        ]
      }
    },
    methods: {
      back: function () {
        router.go(-1)
      },
      click: function () {
        console.log(parseInt(this.$route.params.num))
      },
      change: function (e) {
        console.log(e.target.screenY)
      }
    },
    watch: {
      volume: function (newValue) {
//        this.$refs.player.volume = newValue / 100
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
