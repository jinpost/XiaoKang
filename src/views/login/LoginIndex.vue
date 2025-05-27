<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 登入验证
const formModel = ref({
  username: '',
  password: '',
})
const onSubmit = () => {
  if (
    formModel.value.username === 'jinpost' &&
    formModel.value.password === '123456'
  ) {
    // 模拟登录成功
    router.push('/home') // 使用 router.push 跳转
  } else {
    // 模拟登录失败
    alert('用户名或密码错误！')
  }
}

// 注册验证
const formModel2 = ref({
  username: '',
  password: '',
  password2: '',
})
const onSubmit2 = () => {
  console.log(formModel2.value)
  alert('我没写这里的功能')
}

// 导航栏左侧返回功能
const onClickLeft = () => {
  router.go(-1) // 返回上一页
}

// 切换登入和注册状态
const visible2 = ref(false)
const onClickRight = () => {
  if (visible.value === true) {
    visible.value = false
    setTimeout(() => {
      visible2.value = true
    }, 500)
  } else {
    visible2.value = false
    setTimeout(() => {
      visible.value = true
    }, 500)
  }
}

// 进入登入页面时的动画
const visible = ref(false)
onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 500)
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

    <!--这里是登入页面的主要内容附加了没什么用的动画代码(但是很酷) -->
    <transition name="van-slide-down">
      <div v-show="visible" class="login-index">
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
              >登入</van-button
            >
          </div>
        </van-form>
      </div>
    </transition>

    <!-- 这里是注册页面的主要内容并且也附加了没什么用的动画代码 -->
    <transition name="van-slide-down">
      <div v-show="visible2" class="login-index">
        <van-form @submit="onSubmit2">
          <van-field
            v-model="formModel2.username"
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
            v-model="formModel2.password"
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
          <van-field
            v-model="formModel2.password2"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="密码"
            :rules="[
              {
                required: true,
                message: '请填写确认密码',
              },
            ]"
          />
          <div style="margin: 30px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              >注册</van-button
            >
          </div>
        </van-form>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="less">
::v-deep .van-button__text{
  color: #fff !important;
}
/* 导航栏 - 更精致的渐变 */
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
      box-shadow:
        0 0 0 2px rgba(25, 118, 210, 0.15),
        inset 0 1px 2px rgba(0, 0, 0, 0.03);
      transform: translateY(-1px);
      background-color: white;
    }
  }

  /* 按钮样式 - 更精致的交互 */
  .van-button--info {
    background: linear-gradient(
      135deg,
      #1976d2 0%,
      #1e88e5 100%
    );
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
