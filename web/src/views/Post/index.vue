<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="left-title">
          卧室里的烟雾报警器有红灯一闪一闪的，是摄像头吗？
        </div>
        <div class="article-container">
          独自出行本来是一个很自由的事情，但是因为男女主角不平等，女性独自出行要承担更大的风险。所以说你想要自由出行，
        </div>
        <div class="comment-container">
            <div class="left-mini-title">全部评论</div>
            <div class="left-item">This is an axample article.</div>
            <div class="left-item">This is an axample article.</div>
            <div class="left-item">This is an axample article.</div>
        </div>
      </div>
      <div class="right-container">
        <div class="right-title">更多讨论</div>
        <div class="right-one">
          <div class="item-container-one">
            <div class="right-item">This is an axample article.</div>
            <div class="right-item">This is an axample article.</div>
            <div class="right-item">This is an axample article.</div>
          </div>
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
  background-color: #f0eeea;
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
  height: 900px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  .left-container {
    position: relative;
    width: 48%;
    height: 100%;
    margin-left: 80px;
    .left-title {
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      background-color: #f5f4f1;
    }
    .article-container {
      padding: 20px;
      font-size: 18px;
      height: 40%;
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: #f5f4f1;
      overflow-y: scroll;
    }

    .left-mini-title {
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      margin-left: 20px;
      text-align: left;
    }
    .left-item {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      margin-left: 20px;
      text-align: left;
    }

    .comment-container{
        background-color: #f5f4f1;
        height: 35%;
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

  .right-container {
    width: 28%;
    height: 100%;
    margin-right: 80px;
    .right-title {
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      background-color: #f5f4f1;
    }
    .right-one {
      height: 80%;
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: #f5f4f1;
      .item-container-one {
        height: 150px;
      }
    }
    .right-item {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      margin-left: 20px;
      text-align: left;
    }
    .more-box {
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      position: relative;
      margin-left: 20px;
      text-align: left;
    }
  }
}
</style>