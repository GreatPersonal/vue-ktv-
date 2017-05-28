<template>
  <div class="recommend">
    <ul class="content">
      <li class="recommend_item"
          v-for="v in lists" :key="v.id"
          :style="`background:url('${v.src}')no-repeat center/cover`">
        <router-link :to="{path:'/songslist',query:{v}}">
          <div class="recommend_itemR">
            <div class="recommend_itemR_one">
              <img src="/static/imgs/lxj_rec_listen_05.png" alt="">{{v.people}}
            </div>
            <div class="recommend_itemR_two">
              <img src="/static/imgs/lxj_rec_listen_03.png" alt="">{{v.num}}
            </div>
          </div>
          <div class="recommend_itemL">{{v.name}}</div>
        </router-link>
      </li>

    </ul>
  </div>
</template>
<style lang="scss" src="@/assets/style/recommend.scss" scoped></style>
<script>
  export default {
    name: 'recommend',
    data: function () {
      return {
        lists: [
          {
            id: 0,
            name: '摔跤吧，爸爸',
            pic: 'img1',
            people: '27万',
            num: '86首',
            src: '/static/imgs/lxj_rec_img_03.png'
          },
          {
            id: 1,
            name: '青春励志歌曲',
            pic: 'img2',
            people: '27万',
            num: '86首',
            src: '/static/imgs/lxj_rec_img_06.png'
          },
          {
            id: 2,
            name: '一人一首成名曲',
            pic: 'img3',
            people: '27万',
            num: '86首',
            src: '/static/imgs/lxj_rec_img_08.png'
          },
          {
            id: 3,
            name: '成名曲',
            pic: 'img4',
            people: '27万',
            num: '86首',
            src: '/static/imgs/lxj_rec_img_18.png'
          },
        ],
        songsData: [
          {id: 1, name: '演员', artistName: '薛之谦', during: '04:52', pic: ''},
          {id: 2, name: '演员', artistName: '薛之谦', during: '04:52', pic: ''},
          {id: 3, name: '演员', artistName: '薛之谦', during: '04:52', pic: ''},
          {id: 4, name: '演员', artistName: '薛之谦', during: '04:52', pic: ''},
          {id: 1, name: '演员', artistName: '薛之谦', during: '04:52', pic: ''},
          {id: 2, name: '演员', artistName: '薛之谦', during: '04:52', pic: ''},
          {id: 3, name: '演员', artistName: '薛之谦', during: '04:52', pic: ''}
        ]
      }
    }
  }
</script>

