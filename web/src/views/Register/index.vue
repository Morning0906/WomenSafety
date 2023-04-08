<template>
  <div class="i-container">
    <n-form :model="formState" class="i-form" label-placement="left">
      <h1>注册</h1>
      <!-- 用户名 -->
      <n-form-item path="username">
        <n-input
          v-model:value="formState.username"
          placeholder="请输入用户名.."
          :input-props="{ autocomplete: 'off' }"
        ></n-input>
      </n-form-item>
      <!-- 密码 -->
      <n-form-item path="password">
        <n-input
          v-model:value="formState.password"
          type="password"
          placeholder="请输入密码.."
          :input-props="{ autocomplete: 'off' }"
        ></n-input>
      </n-form-item>
      <!-- 性别 -->
      <n-form-item path="sex">
        <div class="gender-label">性别</div>
        <n-radio-group v-model="formState.sex" name="radiobuttongroup1">
          <n-radio
            v-for="item in sexs"
            :key="item.value"
            :value="item.value"
            @change="updateChecked"
          >
            {{ item.label }}
          </n-radio>
        </n-radio-group>
      </n-form-item>
      <n-form-item class="register-btn">
        <!-- 返回按钮 -->
        <n-button quaternary style="margin: 0 15px 0 0" @click="handleBack">
          返回
        </n-button>
        <!-- 注册按钮 -->
        <n-button
          type="primary"
          attr-type="submit"
          :loading="loadingRegister"
          @click="handleSubmit"
          :disabled="invalidForm()"
          style="width: 120px"
        >
          注册
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
  NRadioGroup,
  NRadio,
  useNotification,
} from "naive-ui";
import { UserRegister } from "@/api/user";

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NInput,
    NButton,
    NRadioGroup,
    NRadio,
  },
  setup() {
    // 路由
    const Router = useRouter();
    const formState = reactive({
      username: "",
      password: "",
      sex: -1,
    });
    const notification = useNotification();
    let loadingCode = ref(false);
    let loadingRegister = ref(false);

    // 定义消息通知
    const notify = (type, message) => {
      notification[type]({
        content: message,
        duration: 2000,
      });
    };

    // 单选框, 修改选中值
    const updateChecked = (checked) => {
      formState.sex = checked.target.value;
    };
    // 验证表单是否填写
    function invalidForm() {
      let { username, password, sex } = formState;
      return username === "" || password === "" || sex === -1;
    }
    // 点击返回
    function handleBack() {
      Router.push("/login");
    }
    // 点击注册
    async function handleSubmit() {
      loadingRegister.value = true;
      // 请求后台进行注册
      let result = await UserRegister({
        username: formState.username,
        password: formState.password,
        sex: formState.sex,
      });
      console.log(result);
      if (result.status == 200) {
        Router.push("/login");
      } else {
        notify("error", result.message);
      }
      loadingRegister.value = false;
    }

    return {
      loadingCode,
      loadingRegister,
      formState,
      handleSubmit,
      handleBack,
      invalidForm,
      sexs: [
        {
          value: 1,
          label: "Boy",
        },
        {
          value: 0,
          label: "Gril",
        },
      ],
      updateChecked,
    };
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
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );
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
.register-btn {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
.gender-label {
  width: 90px;
  height: 34px;
  line-height: 34px;
  background: #ebeaee;
  color: #b5b5b5;
  margin-right: 20px;
}
.n-radio-button {
  width: 100px;
  text-align: center;
}
</style>
