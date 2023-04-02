
<template>  <div class="navbar">
      <div class="navbar-start">
        <div class="navbar-item"><router-link to="/">Home</router-link></div>
        <div class="navbar-item"><router-link to="/community">社区</router-link></div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item"><router-link to="/user">个人中心</router-link></div>
      </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  setup() {
    // 定义变量
    const data = ref("可恶！！！就是语法问题，你个家伙，自己看我Test这个index.vue的写法！");
    return {
      data,
    };
  },
});
</script>

<style lang="less" scoped>
.navbar {
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #EFE6E8;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbar-item {
    position: relative;
    height: 90%;
    width: 80px;
    line-height: 80px;
    font-size: 20px;
    cursor: pointer;
    color: #333;
    padding: 5px 10px;
    margin-right: 10px;
  }

  .navbar-item:hover {
    // TODO悬停后字体颜色不改变
    color: white;
    background-color: #567e7a;
  }

  .navbar-start {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 50px;
  }

  .navbar-end {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 50px;
  }

  .navbar-dropdown {
    display: flex;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-width: 120px;
    z-index: 1;
  }
}
</style>