<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="center-container">
        <div class="center-title">Hello，Morning</div>
        <div class="user-message">
            
        </div>
        <div class="article-container">
            展示该作者的文章
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeadNav from "@/components/HeadNav";

export default defineComponent({
  components: { HeadNav },
  setup() {
    // 定义变量
    const data = ref(
      "可恶！！！就是语法问题，你个家伙，自己看我Test这个index.vue的写法！"
    );
    return {
      data,
    };
  },
});
</script>

<style lang="less" scoped>
.page {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f0eeea;
  overflow-y: hidden;
}

.titlebar {
  font-size: 50px;
  font-weight: 700;
  margin-top: 30px;
  color: #ffffff;
}

.main-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  .center-container {
    position: relative;
    width: 58%;
    height: 100%;
    .center-title {
      height: 50px;
      font-size: 30px;
      line-height: 50px;
      text-align: center;
    }
    .article-container {
      padding: 20px;
      font-size: 18px;
      height: 70%;
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: #f5f4f1;
      overflow-y: scroll;
    }

    // 滚动条样式
    .article-container::-webkit-scrollbar {
      width: 4px;
    }
    .article-container::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.2);
    }
    .article-container::-webkit-scrollbar-track {
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
  }

}
</style>