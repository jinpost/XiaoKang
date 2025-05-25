<script setup></script>
<template>
  <!-- 意义不明的搜索栏(占着再说) -->
  <van-nav-bar left-text="返回" left-arrow>
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
  
</template>
<style scoped lang="less"></style>
