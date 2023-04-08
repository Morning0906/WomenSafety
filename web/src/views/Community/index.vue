<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="news-box-title">发布帖子</div>
        <div class="publish-box">
          <div class="publish-title">
            <input
              class="publish-title-input"
              type="text"
              placeholder="请输入标题..."
            />
          </div>
          <div class="publish-article">
            <textarea
              class="publish-article-input"
              placeholder="请输入具体内容..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="publish-button">发布讨论</div>
        </div>
        <div class="news-box-title">最新讨论</div>
        <div class="news-box">
          <div class="main-news">
            <div class="news-item" @click="jump">
              ·
              女生一个人出门旅行，有哪些值得注意的安全问题？有什么女性出行安全经验分享？
            </div>
            <div class="news-item">· 外出住宿时, 对酒店需要进行哪些检查?</div>
            <div class="news-item">
              ·
              女性在家中穿着得体的情况下，夜晚能拉开窗帘吗？（家里还有其它人）？
            </div>
            <div class="news-item">
              · 独自在公共场合, 有什么需要注意的安全问题吗?
            </div>
            <div class="news-item">
              · 卧室里的烟雾报警器有红灯一闪一闪的，是摄像头吗？可以遮挡住吗？
            </div>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="left-title">
          <img
            class="advice-icon"
            src="../../assets/advice.png"
            alt=""
            srcset=""
          />女性安全好物推荐
        </div>
        <div class="left-one">
          <div class="left-item">
            <div class="product-image">
              <img src="https://img10.360buyimg.com/n1/jfs/t1/95619/39/32470/83274/638f209eEec0f650e/a2e696723c576a0b.jpg" alt="" width="60px" height="60px" />
            </div>
            <div class="content">阻门器顶门器女性出差旅行家用便携门阻</div>
          </div>
          <div class="left-item">
            <div class="product-image">
              <img src="https://img11.360buyimg.com/n7/jfs/t1/215817/36/21118/58598/632a7ca7E3b0fd107/c543d4c418134c4f.jpg" alt="" width="60px" height="60px" />
            </div>
            <div class="content">恰冠安全锁独居女生免打孔好物单身公寓</div>
          </div>
          <div class="left-item">
            <div class="product-image">
              <img src="https://img12.360buyimg.com/n7/jfs/t1/164689/33/32313/82306/6376207dE364638e0/ee8bd43e14d15fb6.jpg.avif" alt="" width="60px" height="60px" />
            </div>
            <div class="content">WORMS防身神器防狼用品女生</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeadNav from "@/components/HeadNav";
import { useRouter } from "vue-router";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: { HeadNav, Footer },
  setup() {
    // 路由
    const Router = useRouter();
    // 定义变量
    const data = ref(
      "可恶！！！就是语法问题，你个家伙，自己看我Test这个index.vue的写法！"
    );

    const jump = () => {
      Router.push("/post");
    };

    return {
      data,
      jump,
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
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );

  .right-container {
    width: 28%;
    height: 100%;
    margin-right: 80px;
    .left-title {
      margin-top: 40px;
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #888;
      .advice-icon {
        width: 30px;
        height: 30px;
      }
    }
    .left-one {
      height: 700px;
      margin-top: 30px;
    }
    .left-mini-title {
      height: 50px;
      font-size: 20px;
      margin-left: 20px;
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
        border-radius: 8px;
        padding-right: 10px;
        img {
          border-radius: 8px;
        }
      }
      .content {
        color: #555;
        font-weight: 400;
      }
    }
  }
  .left-container {
    width: 48%;
    height: 100%;
    margin-left: 80px;
    .publish-box {
      border-radius: 8px;
      .publish-title {
        width: 100%;
        height: 40px;
        .publish-title-input {
          border: none;
          box-sizing: border-box;
          margin-top: 20px;
          padding-left: 12px;
          width: 100%;
          height: 40px;
          background-color: #fff;
          box-shadow: 5px 5px 5px #eee;
          border-radius: 12px;
        }
      }
      .publish-article {
        width: 100%;
      }
      .publish-article-input {
        box-sizing: border-box;
        border: none;
        padding: 15px 12px;
        margin-top: 40px;
        width: 100%;
        height: 260px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 5px 5px 5px #eee;
      }
      .publish-button {
        border-radius: 6px;
        height: 40px;
        line-height: 40px;
        width: 80px;
        font-size: 14px;
        margin-top: 10px;
        background-color: #c8a78d;
        color: #fff;
        font-weight: bold;
      }
    }
    .news-box-title {
      line-height: 30px;
      font-size: 28px;
      font-weight: 600;
      color: #454;
      margin-top: 40px;
      text-align: left;
    }
    .news-box {
      margin-top: 30px;
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: #fff;
      box-shadow: 5px 5px 5px #eee;
      border-radius: 15px;
      .main-news {
        .news-item {
          font-size: 14px;
          color: #999;
          font-weight: 400;
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-bottom: 20px;
          padding-top: 20px;
          margin-left: 20px;
          margin-right: 20px;
          &:not(:last-child) {
            border-bottom: 0.5px solid #eeeeee;
          }
        }
      }
    }
  }
}
</style>
