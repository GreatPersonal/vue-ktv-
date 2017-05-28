<template>
  <div class="singers">
    <ul class="singer-list">
      <li v-for="(v,i) in list">
        <router-link :to="{name:v.path,params:{singers:v.name}}"><h2>{{v.name}}</h2></router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" src="../assets/style/singers.scss"></style>
<script>
  export default {
    name: 'singers',
    data () {
      return {
        list: [
          {name: '内地偶像组合', path: 'singer'},
          {name: '内地男歌手', path: 'singer'},
          {name: '港台歌手', path: 'singer'},
          {name: '日韩女歌手', path: 'singer'},
          {name: '内——地女歌手', path: 'singer'},
          {name: '青春偶像男歌手', path: 'singer'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
