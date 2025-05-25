<script setup>
import { ref } from 'vue'

const formModel = ref({
  username: '',
  password: '',
})
</script>

<template>
  <div class="App">
    <div class="van-nav-bar-container">
      <van-nav-bar
        title="登录页面"
        left-text="返回"
        right-text="注册"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>

    <div class="login-index">
      <van-form @submit="onSubmit">
        <van-field
          v-model="formModel.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[
            {
              required: true,
              message: '请填写用户名',
            },
          ]"
        />
        <van-field
          v-model="formModel.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[
            {
              required: true,
              message: '请填写密码',
            },
          ]"
        />
        <div style="margin: 30px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            @click="this.$router.push({ path: '/home' })"
            >登入</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<style lang="less">
  /* 导航栏 - 更精致的渐变 */
  .van-nav-bar {
    background: linear-gradient(135deg, #1976d2 0%, #1e88e5 100%);
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

  
.login-index {

  min-height: 100px;
  padding: 0;


  /* 表单容器 - 更精致的卡片效果 */
  .van-form {
    padding: 28px 24px;
    margin: 24px 16px 0;
    background-color: white;
    border-radius: 18px;
    box-shadow: 0 6px 20px rgba(30, 136, 229, 0.08);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(224, 239, 255, 0.8);
  }

  /* 输入框 - 更精致的细节 */
  .van-field {
    background-color: #fbfdff;
    border-radius: 12px;
    margin-bottom: 18px;
    border: 1px solid #e1e8f0;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 14px 16px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);

    .van-cell__title {
      color: #1976d2;
      min-width: 72px;
      font-weight: 500;
      font-size: 15px;
    }

    .van-field__control {
      color: #333;
      font-size: 15px;
      &::placeholder {
        color: #b0bec5;
      }
    }

    /* 输入框聚焦效果 - 更细腻 */
    &:focus-within {
      border-color: #1e88e5;
      box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.15), 
                  inset 0 1px 2px rgba(0, 0, 0, 0.03);
      transform: translateY(-1px);
      background-color: white;
    }
  }

  /* 按钮样式 - 更精致的交互 */
  .van-button--info {
    background: linear-gradient(135deg, #1976d2 0%, #1e88e5 100%);
    border: none;
    border-radius: 12px;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.8px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(25, 118, 210, 0.2);
    margin-top: 8px;

    &:active {
      transform: translateY(1px) scale(0.98);
      box-shadow: 0 2px 6px rgba(25, 118, 210, 0.2);
    }
  }

  /* 装饰元素 - 更精致 */
  .van-form:before {
    content: '';
    display: block;
    height: 3px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(25, 118, 210, 0.3),
      transparent
    );
    margin: -16px auto 28px;
    width: 50%;
    border-radius: 3px;
  }
  
}
</style>
