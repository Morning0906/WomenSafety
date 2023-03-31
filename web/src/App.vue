<template>
  <div>
    <n-notification-provider>
      <router-view />
    </n-notification-provider>
  </div>
</template>

<script>
import { NNotificationProvider } from "naive-ui";

export default {
  components: {
    NNotificationProvider,
  },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
