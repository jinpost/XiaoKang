<script setup>
import router from '@/router'
import { ref } from 'vue'

const msg = 'XiaoKang博客'
const arr = msg.split('')
const newArr = ref([]) // 使用ref来包装newArr，使其成为响应式数据
let i = 0

const printCharacters = () => {
  newArr.value.push(arr[i]) // 将字符添加到响应式数组中
  i++
  console.log(newArr.value.join('')) // 每次添加后立即打印字符串

  if (i < arr.length) {
    setTimeout(printCharacters, 300)
  } else {
    i = 0
    // newArr.value.length = 0 // 清空响应式数组
    // 如果需要重新开始，可以再次调用
    // setTimeout(printCharacters, 500)
  }
}

setTimeout(printCharacters, 300)
</script>

<template>
  <div class="Hello">

    <div class="bac-text">
      <h1 @click="router.push('/home')">{{ newArr.join('') }}</h1>
    </div>
  </div>
</template>

<style scoped lang="less">
body {
  margin: 0;
  padding: 0;
}
.Hello {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../../assets/dog.jpg');
  background-size: cover; /* 使背景图片覆盖整个容器，保持宽高比 */
  background-position: center; /* 使背景图片居中 */
  background-repeat: no-repeat;
  .bac-text {
    background-color: rgba(255, 255, 255, 0.1);
    margin: 0 auto; /* 使内容居中 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* 添加阴影 */
    color: #fff; /* 字体颜色 */
    // border: 1px solid #fff; /* 添加边框 */
    backdrop-filter: blur(7px); /* 添加毛玻璃效果 */
    border-radius: 10px; /* 添加圆角 */
    padding: 0 5px;

    h1 {
      color: #fff;
      font-size: 2rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* 添加文字阴影以提高可读性 */
      font-weight: bold; /* 加粗 */
      opacity: 1 !important; /* 覆盖父元素的透明度 */
      line-height: 1.5; /* 调整行高 */
      text-align: center; /* 居中 */
      margin: 0; /* 去掉默认的顶部外边距 */
    }
  }
}
</style>
