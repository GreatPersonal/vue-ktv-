<template>
  <div class="singer">
    <ul class="content">
      <li v-for="(v,i) in singer">
        <router-link :to="{name:v.path,params:{id:v.id-1}}">
          <div class="bg"></div>
        </router-link>
        <h3>
          {{v.name}}({{v.num}})
        </h3>
      </li>
    </ul>
    <div class="letter"></div>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" src="../assets/style/singer.scss"></style>
<script>
  export default {
    name: 'singer',
    data () {
      return {
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
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
