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
              v-model="tweetTit"
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
              v-model="tweetCont"
            ></textarea>
          </div>
          <div class="publish-button" @click="publishDiscuss">发布讨论</div>
        </div>
        <div class="news-box-title">最新讨论</div>
        <div class="news-box">
          <div class="main-news">
            <div
              class="news-item"
              @click="jump(item)"
              v-for="(item, index) in dataTitleArr"
              :key="index"
            >
              <img
                class="news-icon"
                src="../../assets/post.png"
                alt=""
                srcset=""
              />
              {{ item.title }}
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
          <div
            class="left-item"
            v-for="(item, index) in commodityList"
            :key="index"
          >
            <div class="product-image">
              <img :src="item.picture" alt="" width="60px" height="60px" />
            </div>
            <div class="content">
              <a target="_blank" :href="item.link">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, reactive } from "vue";
import HeadNav from "@/components/HeadNav";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Footer from "@/components/Footer.vue";
import { queryTweets, createTweet, queryCommodities } from "@/api/index";

export default defineComponent({
  components: { HeadNav, Footer },
  setup() {
    // 路由
    const Router = useRouter();
    // 状态管理
    const Store = useStore();
    // 定义变量
    const data = ref("");
    const tweetTit = ref("");
    const tweetCont = ref("");

    const commodityList = reactive([]);

    let dataTitleArr = reactive([]);

    // 在组件挂载后执行的操作
    onMounted(async () => {
      // 发起请求
      await updateTweet();
    });

    // 更新讨论
    const updateTweet = async () => {
      const result = await queryTweets();
      let dataTitle = result.data.reverse().slice(0, 5);
      while (dataTitleArr.length) {
        dataTitleArr.pop();
      }
      for (let item of dataTitle) {
        dataTitleArr.push(item);
      }
    };

    // 发布讨论
    const publishDiscuss = async () => {
      if (!tweetTit.value) {
        alert("请输入推文标题");
        return;
      }
      if (!tweetCont.value) {
        alert("请输入推文内容");
        return;
      }
      const result = await createTweet({
        title: tweetTit.value,
        content: tweetCont.value,
        author: Store.state.user.username,
      });
      alert(result.message);
      // 更新最新推文
      await updateTweet();
      // 清空输入内容
      tweetTit.value = "";
      tweetCont.value = "";
    };

    const jump = (item) => {
      Router.push({ path: "post", query: { detail: JSON.stringify(item) } });
    };

    // 发起新闻列表请求
    onMounted(async () => {
      const commodityResult = await queryCommodities();
      console.log(commodityResult);
      // ref数据要.value
      for (let item of commodityResult.data) {
        commodityList.push(item);
      }
    });

    return {
      data,
      jump,
      publishDiscuss,
      tweetTit,
      tweetCont,
      commodityList,
      updateTweet,
      dataTitleArr,
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
        margin-left: 10px;
        height: 60px;
        width: 60px;
        border-radius: 8px;
        padding-right: 10px;
        img {
          height: 60px;
          width: 60px;
          border-radius: 8px;
        }
      }
      .content {
        margin-left: 10px;
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
        cursor: pointer;
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
          display: flex;
          align-items: center;
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-bottom: 20px;
          padding-top: 20px;
          margin-left: 20px;
          margin-right: 20px;
          cursor: pointer;
          &:not(:last-child) {
            border-bottom: 0.5px solid #eeeeee;
          }
        }
        .news-item:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .news-icon {
    width: 20px;
    height: 20px;
    padding-right: 5px;
  }
}
</style>
