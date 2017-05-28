<template>
  <div class="quarter-rank">
    <swiper :options="swiperOption" ref="mySwiper" class="banner" >
      <swiper-slide class="swiper" :key="i" v-for="(v,i) in pik"
                    :style="`background:url(/static/imgs/${v.pic})no-repeat center/cover`"></swiper-slide>
    </swiper>
    <!--<swiper :options="coverflow">-->
      <!--<swiper-slide v-for="(v,i) in pik" :key="i"-->
                    <!--:style="`background:url(/static/imgs/${v.pic})no-repeat center/cover`">{{v.name}}-->
      <!--</swiper-slide>-->
    <!--</swiper>-->
    <DisplaySongs :songs="songs"></DisplaySongs>
  </div>
</template>
<style lang="scss" src="@/assets/style/rank.scss"></style>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import DisplaySongs from './DisplaySongs.vue'
  export default {
    components: {
      swiper,
      swiperSlide,
      DisplaySongs
    },
    data () {
      return {
        pik: [
          {id: 1, name: '', pic: 'lxj_rec_img_03.png'},
          {id: 2, name: '', pic: 'lxj_rec_img_06.png'},
          {id: 3, name: '', pic: 'lxj_rec_img_08.png'},
          {id: 4, name: '', pic: 'lxj_rec_img_18.png'},
          {id: 5, name: '', pic: 'lxj_rec_img_18_08.png'}
        ],
        swiperOption: {
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          initialSlide: 1,
          grabCursor: true,
          slidesPerView: 1.25,
          centeredSlides: true,
          autoplay: 2000,
          setWrapperSize :true,
          shortSwipers:true
        },
        computed: {
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        },
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
    },
//    mounted: function () {
//      setInterval(function () {
//        let swiperSlides = this.pik;
//      }, 3000)
//    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

