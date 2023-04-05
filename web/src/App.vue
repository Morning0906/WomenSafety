<template>
  <div>
    <n-notification-provider>
      <router-view />
    </n-notification-provider>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { NNotificationProvider } from "naive-ui";
import { useStore } from "vuex";
import { CheckStatus } from "@/api/user";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    NNotificationProvider,
  },
  name: "App",
  setup() {
    const Store = useStore();
    const Router = useRouter();
    // 检查用户登录状态, 更新状态
    onMounted(async () => {
      let result = await CheckStatus();
      let obj = result.data && result.data.length > 0 ? result.data[0] : {};
      let newData = {
        ...obj,
        token: localStorage.getItem("token")
      }
      if (result && result.status == 200) {
        // 更新用户信息
        Store.dispatch("user/INITUSERINFO", newData);
        Router.push({ name: "Home" });
      }
    });
    return {};
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
