<script setup>
  const handleClick = () =>{
    // 跳转到详情页
    
  }
</script>
<template>
  <!-- 意义不明的搜索栏(占着再说) -->
  <van-nav-bar left-arrow>
    <template #left>
      <div>logo</div>
    </template>
    <template #title>
      <van-search
        style="padding: 0"
        v-model="value"
        placeholder="请输入搜索关键词"
      />
    </template>
    <template #right>
      <div>头像</div>
    </template>
  </van-nav-bar>
  <!-- 博客文章列表 -->
  <div class="Blog_post_list">
    <BlogPost @click="handleClick"></BlogPost>
  </div>
  <!-- 底部分页 -->
   <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
</template>
<style scoped lang="less">
.Blog_post_list {
  margin: auto;
  width: 80%;
}
</style>
