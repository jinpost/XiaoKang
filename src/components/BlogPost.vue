<script setup >
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const DatePosted = ref(new Date().toLocaleDateString('zh-CN'))
  console.log(DatePosted)

  const router = useRouter()
  const handleClick = () => {
  // 跳转到详情页
  router.push({ name: 'article' })
}
</script>

<template>
  <div @click="handleClick">
    <div class="Blog_post_cover_image"></div>
    <div class="Blog_post_title">这是标题</div>
    <div class="Blog_post_abstract">这是简介</div>
    <van-row class="Blog_post_meta-information">
      <van-col span="8" style="text-align: left;">{{ DatePosted }}</van-col>
      <van-col span="8" style="text-align: center;">这是作者</van-col>
      <van-col span="8" style="text-align: right;">这是阅读量</van-col>
    </van-row>
  </div>
</template>

<style scoped lang="less">
  .Blog_post_cover_image {
    background-image: url('../assets/MoRenTuPian.png');
    background-size: cover;
    height: 150px;
    width: 100%;
  }
  .Blog_post_title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
  }
  .Blog_post_abstract{
    font-size: 16px;
    color: #666;
    margin-top: 5px;
  }
</style>