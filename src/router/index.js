import Vue from 'vue'
import Router from 'vue-router'

//---------------------- 首页 --------------------
import Classify from '@/components/Classify'
import Link from '@/components/Link'

//---------------------- 游戏 -------------------
import Game from '@/components/Game'
import Game01 from '@/components/Game01'
//---------------------- 我的 -------------------
import Me from '@/components/Me'

//---------------------- 发现 ----------------------
import Store from '@/components/Store'
import Choised from '@/components/Choised'
import Success from '@/components/Success'

//--------------------- 排行页 ---------------------
import Rank from '@/components/Ranking-list'
import Qrank from '@/components/Quarter-rank'
import Yrank from '@/components/Year-rank'
// --------------------------推荐歌单----------------
import Recommend from '@/components/Recommend'
import SongsList from '@/components/Songslist'
import Popular from '@/components/Popular'
//--------------------- 歌手页 ----------------------
import Artist from '@/components/Artist'
import Singer from '@/components/Singer'
import ArtistClassify from '@/components/Artist-classifiction'
import Songs from '@/components/Songs'
import Lyrics from '@/components/Lyrics'
import Checked from "@/components/Checked"


Vue.use(Router);
export default new Router({

  mode: 'history',
  routes: [

    //---------------- 首页 ------------------
    {
      path: '/',
      name: 'classify',
      component: Classify
    },


    // ------------------ 二维码 ---------------------
    {
      path: '/link',
      name: 'link',
      component: Link
    },


    //----------------- 游戏 ------------------
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    //----------------真心话大冒险--------------
    {
      path: '/game/game01',
      name: 'game01',
      component: Game01
    },


    //----------------- 商品 ------------------
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    //----------------- 商品 ------------------
    {
      path: "/store/choised",
      name: "Choised",
      component: Choised
    },
    //----------------选购页面----------------------
    {
      path: "/store/success",
      name: "Success",
      component: Success
    },


    //---------------- 点歌页 ----------------
    {
      path: '/artist',
      name: 'artist',
      component: Artist,
      children: [
        // 歌手分类
        {
          path: 'singers',
          name: 'singers',
          component: ArtistClassify
        },
        // 歌手
        {
          path: 'singer',
          name: 'singer',
          component: Singer
        },
        // 排行
        {
          path: 'rank',
          name: 'rank',
          component: Qrank
        },
        // 月排行
        {
          path: 'qrank',
          name: 'qrank',
          component: Qrank
        },
        // 年排行
        {
          path: 'yrank',
          name: 'yrank',
          component: Qrank
        },
        // -------------------推荐歌单--------------------
        {
          path: 'recommend',
          name: 'recommend',
          component: Recommend
        },
        //---------------- 常唱页 -----------------
        {
          path: 'popular',
          name: 'popular',
          component: Popular
        },
      ]
    },
    // -------------------推荐歌单详情--------------------
    {
      path: '/songslist',
      name: 'songslist',
      component: SongsList
    },
    //---------------- 歌曲页 -----------------
    {
      path: '/songs/:id',
      name: 'songs',
      component: Songs,
    },
    //---------------- 已点歌曲页 -----------------
    {
      path: '/checked',
      name: 'checked',
      component: Checked,
    },

    //----------------- 歌词 ------------------
    {
      path: '/songs/:id/:num/lyrics',
      name: 'lyrics',
      component: Lyrics
    },


    // --------------------我的-------------------
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
