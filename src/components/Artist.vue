<template>
  <div class="artist">
    <div class="nav">
      <div class="back" @click="back"><i></i></div>
      <div class="nav-content">
        <h2>{{$route.params.name || mssg[active].name}}</h2>
      </div>
      <router-link :to="{path:'/checked'}" class="checked">
        <h2>已点歌曲</h2>
      </router-link>
    </div>
    <ul class="tab">
      <li v-for="(v,i) in mssg" @click="tab(i)">
        <div :class="`bg-tab ${i===active?'active':''}`"></div>
        <router-link :to="{name:v.path,params:{list:v.path}}">
          {{v.name}}
        </router-link>
      </li>
    </ul>
    <div class="search" v-if="active===0">
      <div class="search-icon"></div>
      <input type="text" placeholder="请输入您要搜索的歌手">
    </div>
    <ul class="ranks" v-if="active===1">
      <li :class="`tabs ${index===tActive?'tActive':''}`"
          :key="index"
          @click="tabs(index)"
          v-for="(val,index) in ranks">
        <router-link :to="{name:val.path}">
          {{val.name}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" src="@/assets/style/artist.scss" scoped></style>
<script>
  import router from '@/router/index'
  export default {
    name: 'classify',
    data () {
      return {
        tActive: 0,
        active: 0,
        mssg: [
          {name: "歌手", path: "singers"},
          {name: "排行", path: "rank"},
          {name: "常唱", path: "popular"},
          {name: "推荐歌单", path: "recommend"}
        ],
        ranks: [
          {name: "月排行", path: 'rank'},
          {name: "季排行", path: 'qrank'},
          {name: "年排行", path: 'yrank'}
        ]
      }
    },
    methods: {
      back: function () {
        router.push({name: 'classify'})
      },
      tab: function (i) {
        this.active = i;
      },
      tabs: function (index) {
        this.tActive = index;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
