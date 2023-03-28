<template>
  <div class="i-container">
    <n-form
      :model="formState"
      class="i-form"
      label-placement="left"
    >
      <!-- 网站title -->
      <h1>Women Safe</h1>
      <!-- 邮箱 -->
      <n-form-item path="username">
        <n-input
          v-model="formState.username"
          :placeholder="username"
          :input-props="{ autocomplete: 'off' }"
        ></n-input>
      </n-form-item>
      <!-- 密码 -->
      <n-form-item path="password">
        <n-input
          v-model="formState.password"
          type="password"
          :placeholder="password"
          :input-props="{ autocomplete: 'off' }"
        ></n-input>
      </n-form-item>
      <n-form-item>
        <p class="i-form-msg">没有账号请注册</p>
        <!-- 注册按钮 -->
        <n-button quaternary style="margin: 0 15px 0 0" @click="handleRegister">
          注册
        </n-button>
        <!-- 登录按钮 -->
        <n-button
          type="primary"
          attr-type="submit"
          :loading="loading"
          @click="handleSubmit"
          style="width: 120px"
        >
          登录
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
import { ref, reactive, defineComponent } from "vue";
import { useRouter } from "vue-router";
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
} from "naive-ui";

export default defineComponent({
  setup() {
    // 路由
    const Router = useRouter();
    const formState = reactive({
      username: "",
      password: "",
    });
    let loading = ref(false);
    // 点击登录
    async function handleSubmit() {
      Router.push("/home");
    }
    // 点击注册
    function handleRegister() {
      Router.push("/register");
    }
    return {
      loading,
      formState,
      handleSubmit,
      handleRegister,
    };
  },
  components: {
    NForm,
    NFormItem,
    NInput,
    NButton,
  },
});
</script>

<style lang="less" scoped>
.i-container {
  height: 100vh;
  background: #efeef1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.i-form {
  box-sizing: border-box;
  margin: auto;
  padding: 12px 24px;
  width: 360px;
  max-width: 100%;
  border-radius: 8px;
  background: #fff;
  h1 {
    margin-bottom: 24px;
  }
}
.i-form-msg {
  margin-right: auto;
}
</style>
