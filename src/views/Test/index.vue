<template>
  <h2>{{ data }}</h2>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const data = ref("可恶！！！就是语法问题，你个家伙，自己看我Test这个index.vue的写法！");
    return {
      data,
    };
  },
});
</script>

<style scoped lang="less">
h2 {
  padding: 80px 0 0;
  text-align: center;
}
h4 {
  margin-top: 10px;
  text-align: center;
}
.container {
  width: 600px;
  margin: 0 auto;
  padding: 10px 30px;
}
</style>
