<template>
  <div id="Already">
    <header>

      <div class="back" @click="back"></div>
      <h5 class="title">{{title}}</h5>
      <span>共{{musicInfo.length}}首</span>
    </header>
    <ul id="main">
      <li v-for="(v,i) in musicInfo" class="list" :key="i">
        <router-link :to="{path:'/songs/0/01/lyrics'}">
          <div class="avatar">
            <img :style="{background:`#fff url(${v.pic}) center/cover`}" alt=""/>
          </div>
        </router-link>

        <div class="musicInfo">
          <div class="delete-stick">
            <div class="delete" @click="remote(v.id)"></div>
            <div class="stick" @click="stick($event,i)"></div>
          </div>
          <div class="music">
            <span class="music-name">{{v.sname}}</span> — <span class="music-singer">{{v.name}}</span>
          </div>
          <span class="music-time">{{v.time}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" src="@/assets/style/checked.scss"></style>
<script>
  import router from "@/router/index"
  export default{
    name: '',
    data(){
      return {
        title: '已点歌曲',
        num: null,
        musicInfo: []
      }
    },
    methods: {
      back: function () {
        router.go(-1)
      },
      remote: function (value) {
        let that = this;
        this.musicInfo.forEach(function (v, i) {
          if (v.id === value) {
            that.musicInfo.splice(i, 1);
            localStorage.chSongs = JSON.stringify(that.musicInfo);
          }
        })
      },
      stick: function (e) {
        let els = e.path[3];
        let elsp = e.path[3].parentNode;
        elsp.removeChild(els);
        elsp.insertBefore(els, elsp.firstChild)
      }
    },
    mounted: function () {
      this.musicInfo = JSON.parse(localStorage.chSongs)
    }
  }
</script>

