<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const DatePosted = ref(
  new Date().toLocaleDateString('zh-CN'),
)
console.log(DatePosted)

const router = useRouter()
const handleClick = () => {
  // 跳转到详情页
  router.push({ name: 'article' })
}
</script>

<template>
  <div class="Blog_post" @click="handleClick">
    <div class="Blog_post_cover_image">

      <div class="Blog_post_meta-information-container">

        <van-row type="flex" justify="center">
            <van-col span="7" style="text-align: left">{{
              DatePosted
            }}</van-col>
            <van-col span="8" style="text-align: center"
              >这是作者</van-col
            >
            <van-col span="7" style="text-align: right"
              >这是阅读量</van-col
            >
        </van-row>

      </div>
      
    </div>
    <div class="Blog_post_title">这是标题</div>
    <div class="Blog_post_abstract">这是简介</div>
  </div>
</template>

<style scoped lang="less">
.Blog_post {
  margin-top: 10px;
  overflow: hidden;
  border-radius: 10px 10px 5px 5px;
  border: 1px solid #000;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  //图片部分
  .Blog_post_cover_image {
    background-image: url('../assets/MoRenTuPian.png');
    background-size: cover; /* 使背景图片覆盖整个容器，保持宽高比 */
    background-position: center; /* 使背景图片居中 */
    background-repeat: no-repeat;
    height: 15vh;
    width: 100%;
    // 图片内文字
    .Blog_post_meta-information-container {
      padding-top: 80px;
    }
  }
  // 标题
  .Blog_post_title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    margin: 0;
  }
  .Blog_post_abstract {
    margin: 0;
    font-size: 16px;
    color: #666;
    margin-top: 5px;
  }
}
</style>
