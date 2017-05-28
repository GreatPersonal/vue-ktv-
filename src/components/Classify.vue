<template>
  <div class="classify">
    <div class="gps">
      <span></span>
      <div class="access">
        <h1>南京</h1>
        <div class="lis"><i></i><i></i><i></i></div>
      </div>
    </div>
    <ul class="sort">
      <li v-for="(v,i) in msg">
        <router-link :to="{name:v.path}"><h2>{{v.name}}</h2></router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" src="@/assets/style/classify.scss" scoped></style>
<script>
  export default {
    name: 'classify',
    data () {
      return {
        msg: [
          {name: "点歌", path: "singers"},
          {name: "游戏", path: "game"},
          {name: "商店", path: "store"},
          {name: "我的", path: "me"}
        ]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
