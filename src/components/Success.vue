<template>
  <div class="main">
    <div class="header">
      提交成功
    </div>
    <div class="content">
      <div class="top">
        <div class="gongxi">恭喜您已经提交成功</div>
      </div>
      <router-link to="/" class="bottom">返回点歌</router-link>
    </div>
  </div>
</template>
<style lang="scss" src="@/assets/style/success.scss" scoped></style>
<script>
  export default{
    name: "success",
    data: function () {
      return {}
    }
  }
</script>
