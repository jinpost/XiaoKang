<script setup>
import router from '@/router'
</script>
<template>
  <!-- 意义不明的搜索栏(占着再说) -->
  <van-nav-bar left-arrow>
    <template #left>
      <div @click="router.push('/hello')">logo</div>
    </template>
    <template #title>
      <van-search
        style="padding: 0"
        v-model="value"
        placeholder="请输入搜索关键词"
      />
    </template>
    <template #right>
      <div @click="router.push('/login')">
        <van-image  
          round
          width="2.3rem"
          height="2.3rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          style="margin-top: 7px;"
        />
      </div>
    </template>
  </van-nav-bar>
  <!-- 博客文章列表 -->
  <div class="Blog_post_list">
    <BlogPost></BlogPost>
    <BlogPost></BlogPost>
    <BlogPost></BlogPost>
    <BlogPost></BlogPost>
    <BlogPost></BlogPost>
  </div>
  <!-- 底部分页 -->
  <van-pagination
    v-model="currentPage"
    :total-items="24"
    :items-per-page="5"
  />
</template>
<style scoped lang="less">

::v-deep .van-nav-bar {
  background: linear-gradient(
    135deg,
    #1976d2 0%,
    #1e88e5 100%
  );
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.15);

  .van-nav-bar__title {
    color: white;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
  .van-nav-bar__text,
  .van-nav-bar__arrow {
    color: rgba(255, 255, 255, 0.95);
    font-size: 15px;
  }
}

.Blog_post_list {
  margin: 0 auto;
  padding: 10px 30px;
  width: 75%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}
</style>
