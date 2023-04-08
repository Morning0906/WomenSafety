
<template>
  <div
    class="navbar"
    :style="{
      height: resultHeightStyle,
    }"
  >
    <div class="top-box">
      <div class="navbar-start">
        <div class="navbar-item">
          <router-link to="/">Home</router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/community">社区</router-link>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link to="/user">个人中心</router-link>
        </div>
      </div>
    </div>
    <!-- 首页显示 -->
    <div class="home_title" v-show="resultHeightStyle == '380px'">
      Women's Safety
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  setup() {
    // 路由
    const Router = useRouter();
    // 定义变量
    const resultHeightStyle = ref("");
    const resultBgColorStyle = ref("");

    onMounted(() => {
      // 判断路由设定高度
      let currentPath = Router.currentRoute.value.path;
      console.log(currentPath);
      if (currentPath === "/home") {
        resultHeightStyle.value = "380px";
      } else {
        resultHeightStyle.value = "80px";
      }
    });

    return {
      resultHeightStyle,
      resultBgColorStyle,
    };
  },
});
</script>

<style lang="less" scoped>
.navbar {
  background-image: url("../assets/home-bg-3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 30%;
  position: relative;
  width: 100%;
  background-color: #efe6e8;

  .top-box {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .navbar-item {
      position: relative;
      height: 90%;
      width: 80px;
      line-height: 80px;
      cursor: pointer;
      padding: 5px 10px;
      margin-right: 10px;
      a {
        font-size: 20px;
        color: #f5f5f5;
        font-weight: bold;
        text-decoration: none;
      }
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

  .home_title {
    position: absolute;
    bottom: 40px;
    right: 70px;
    color: #fff;
    font-weight: bold;
    font-size: 55px;
    text-transform: uppercase;
  }
}
</style>