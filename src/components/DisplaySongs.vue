<template>
  <ul class="content" ref="ul">
    <li v-for="(v,index) in songs" :class="`li${v.id}`">
      <div class="num">{{v.id}}</div>
      <div class="song-name">
        <span>{{v.name}}</span>
        <i>{{v.songTime}}</i>
      </div>
      <div :class="{mul:true}" @click="add(v)"></div>
    </li>
  </ul>
</template>
<script>
  // 呈现歌曲
  export default {
    name: 'DisplaySongs',
    props: ['songs'],
    data: function () {
      return {
        ch: []
      }
    },
    mounted: function () {
      var that = this;
      if (localStorage.chSongs) {
        var chSongs = JSON.parse(localStorage.chSongs);
        chSongs.forEach(function (v) {
          that.ch.push(v.id);
          that.ch.forEach(function (v) {
            that.$refs.ul.querySelector(`.li${v}`).classList.add('active');
          });
        })
      }
    },
    methods: {
      add: function (v) {
        var that = this;
        this.ch.push(v.id);
        this.ch.forEach(function (v) {
          that.$refs.ul.querySelector(`.li${v}`).classList.add('active');
        });

        var chSongs;
        if (localStorage.chSongs) {
          chSongs = JSON.parse(localStorage.chSongs);
        } else {
          chSongs = [];
        }
        console.log(chSongs);
        var has = chSongs.filter(function (item) {
          return v.id == item.id;
        });
        if (!has.length) {
          chSongs.push(v);
          localStorage.chSongs = JSON.stringify(chSongs);
        }
      }
    }
  }
</script>
<style lang="scss" scoped src="@/assets/style/displaySongs.scss"></style>
