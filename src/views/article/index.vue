<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const onClickLeft = () => {
  router.go(-1) // 返回上一页
}
</script>
<template>
  <van-nav-bar
    @click-left="onClickLeft"
    left-text="返回"
    left-arrow
  >
    <template #title> 博客文章 </template>
    <template #right>
      <div>收藏</div>
    </template>
  </van-nav-bar>
  <div>
    <span>文章内容</span>
  </div>
  <div>
    <button>点赞</button>
    <button>评论</button>
  </div>
  <div>
    <span>评论区</span>
  </div>
</template>
<style scoped lang="less"></style>
