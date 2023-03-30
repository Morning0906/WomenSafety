<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="publish-box">
          <div class="publish-title">
            <input class="publish-title-input" type="text" value="请输入标题" />
          </div>
          <div class="publish-article">
            <input class="publish-article-input" type="text" />
          </div>
          <div class="publish-button">发布讨论</div>
        </div>
        <div class="news-box">
          <div class="news-box-title">最新讨论</div>
          <div class="main-news">
            <div class="news-item">
              女生一个人出门旅行，有哪些值得注意的安全问题？有什么女性出行安全经验分享？
            </div>
            <div class="news-item">
              卧室里的烟雾报警器有红灯一闪一闪的，是摄像头吗？可以遮挡住吗？
            </div>
            <div class="news-item">
              女性在家中穿着得体的情况下，夜晚能拉开窗帘吗？（家里还有其它人）？
            </div>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="left-title">女性安全好物推荐</div>
        <!-- <div class="left-one">
          <div class="left-item">
            <div class="product-image">
              <img
                src="../../src/assets/111.jpg"
                alt=""
                width="60px"
                height="60px"
              />
            </div>
            阻门器顶门器女性出差旅行家用便携门阻
          </div>
          <div class="left-item">
            <div class="product-image">
              <img
                src="../../src/assets/111.jpg"
                alt=""
                width="60px"
                height="60px"
              />
            </div>
            女生个人防狼报警器紧急呼救器
          </div>
          <div class="left-item">
            <div class="product-image">
              <img
                src="../../src/assets/111.jpg"
                alt=""
                width="60px"
                height="60px"
              />
            </div>
            阻门器顶门器女性出差旅行家用便携门阻
          </div>
          <div class="left-item">
            <div class="product-image">
              <img
                src="../../src/assets/111.jpg"
                alt=""
                width="60px"
                height="60px"
              />
            </div>
            女生个人防狼报警器紧急呼救器
          </div>
          <div class="left-item">
            <div class="product-image">
              <img
                src="../../src/assets/111.jpg"
                alt=""
                width="60px"
                height="60px"
              />
            </div>
            阻门器顶门器女性出差旅行家用便携门阻
          </div>
          <div class="left-item">
            <div class="product-image">
              <img
                src="@/assets/111.jpg"
                alt=""
                width="60px"
                height="60px"
              />
            </div>
            女生个人防狼报警器紧急呼救器
          </div>
          <div class="left-item">
            <div class="product-image">
              <img
                src="../../src/assets/111.jpg"
                alt=""
                width="60px"
                height="60px"
              />
            </div>
            阻门器顶门器女性出差旅行家用便携门阻
          </div>
          <div class="left-item">
            <div class="product-image">
              <img
                src="../../src/assets/111.jpg"
                alt=""
                width="60px"
                height="60px"
              />
            </div>
            阻门器顶门器女性出差旅行家用便携门阻
          </div>
          <div class="left-item">
            <div class="product-image">
              <img
                src="../../src/assets/111.jpg"
                alt=""
                width="60px"
                height="60px"
              />
            </div>
            阻门器顶门器女性出差旅行家用便携门阻
          </div>
        </div> -->
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

.navbar {
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #efe6e8;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbar-item {
    position: relative;
    height: 100%;
    width: 80px;
    line-height: 80px;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
    margin-right: 10px;
  }

  .navbar-item:hover {
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

.main-container {
  position: relative;
  width: 100%;
  height: 1000px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  .right-container {
    width: 28%;
    height: 100%;
    margin-right: 80px;
    .left-title {
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      background-color: #f5f4f1;
    }
    .left-one {
      height: 700px;
      margin-top: 30px;
      background-color: #f5f4f1;
    }
    .left-mini-title {
      height: 50px;
      font-size: 20px;
      margin-left: 20px;
      // margin-top: 10px;
      text-align: left;
    }
    .left-item {
      display: flex;
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      padding-top: 10px;
      margin-top: 10px;
      margin-left: 10px;
      .product-image {
        height: 60px;
        width: 60px;
        padding-right: 10px;
      }
    }
  }
  .left-container {
    width: 48%;
    height: 100%;
    margin-left: 80px;
    .publish-box {
      height: 400px;
      background-color: #d8d8d8;
      .publish-title {
        width: 100%;
        height: 40px;
      }
      .publish-title-input {
        border: none;
        margin-top: 20px;
        width: 95%;
        height: 40px;
        background-color: #f5f4f1;
      }
      .publish-article {
        width: 100%;
      }
      .publish-article-input {
        border: none;
        margin-top: 40px;
        width: 95%;
        height: 260px;
        background-color: #f5f4f1;
      }
      .publish-button {
        border-radius: 6px;
        height: 40px;
        line-height: 40px;
        width: 80px;
        font-size: 14px;
        margin-top: 10px;
        margin-left: 20px;
        background-color: #567e7a;
        color: #fff;
      }
    }
    .news-box {
      height: 450px;
      margin-top: 30px;
      background-color: #d8d8d8;
      .news-box-title {
        height: 20px;
        line-height: 30px;
        font-size: 20px;
        padding-top: 20px;
      }
      .main-news {
        height: 200px;
        margin: 30px;
        .news-item {
          height: 60px;
          margin-top: 10px;
          padding-left: 10px;
          background-color: #f5f4f1;
          font-size: 18px;
          line-height: 60px;
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
