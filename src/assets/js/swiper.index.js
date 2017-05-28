import Vue from 'vue'
import Swiper from 'vue-swiper'
new Vue({
  el: 'body',
  components: {swiper: Swiper},
  data: {

  },
  methods: {
    onSlideChangeStart: function (currentPage) {
      console.log('onSlideChangeStart', currentPage);
    },
    onSlideChangeEnd: function (currentPage) {
      console.log('onSlideChangeEnd', currentPage);
    },
    onSlideRevertStart: function (currentPage) {
      console.log('onSlideRevertStart', currentPage);
    },
    onSlideRevertEnd: function (currentPage) {
      console.log('onSlideRevertEnd', currentPage);
    },
    onSliderMove: function (offset) {
      console.log('onSliderMove', offset);
    },
    prependSlide: function (slideText) {
      this.slides.unshift(slideText);
    },
    appendSlide: function (slideText) {
      this.slides.push(slideText);
    },
    removeSlide: function () {

    }
  }
});
