<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="left-title">{{ item.title }}</div>
        <div class="left-title2">
          <div class="author-box">@{{ item.author }}</div>
          <div class="time-box">{{ item.createAt }}</div>
        </div>
        <div class="article-container">
          {{ item.content }}
        </div>
        <!-- 发布评论 -->
        <div class="publish-box">
          <div class="publish-article">
            <el-input
              class="publish-article-input"
              v-model="inputValue"
              placeholder="请输入想评论的内容..."
              type="textarea"
              rows="5"
              size="large"
            ></el-input>
          </div>
          <div class="publish-button" @click="publishComment(item)">
            发布评论
          </div>
        </div>
        <div class="comment-title">全部评论</div>
        <div class="comment-container">
          <div class="comment-item" v-for="(item, index) in commentArr" :key="index">
            <div class="comment-author">{{ item.author }}：</div>
            <div class="comment-content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="right-title">
          <img
            class="title-icon"
            src="../../assets/more-discuss.png"
            alt=""
            srcset=""
          />
          更多讨论
        </div>
        <div class="right-one">
          <div class="item-container-one">
            <div class="right-item">
              <img
                class="title-icon-2"
                src="../../assets/discuss.png"
                alt=""
                srcset=""
              />
              女性在家中时，夜晚能拉开窗帘吗？
            </div>
            <div class="right-item">
              <img
                class="title-icon-2"
                src="../../assets/discuss.png"
                alt=""
                srcset=""
              />
              有什么女性出行安全经验分享？
            </div>
            <div class="right-item">
              <img
                class="title-icon-2"
                src="../../assets/discuss.png"
                alt=""
                srcset=""
              />
              出去住的酒店插孔里如何鉴别摄像头
            </div>
            <div class="right-item">
              <img
                class="title-icon-2"
                src="../../assets/discuss.png"
                alt=""
                srcset=""
              />
              遭遇家暴时, 应该怎么办
            </div>
            <div class="right-item">
              <img
                class="title-icon-2"
                src="../../assets/discuss.png"
                alt=""
                srcset=""
              />
              卧室烟雾报警器一闪一闪的是不是摄像头
            </div>
            <div class="right-item">
              <img
                class="title-icon-2"
                src="../../assets/discuss.png"
                alt=""
                srcset=""
              />
              昨晚感觉自己被尾随了
            </div>
            <div class="right-item">
              <img
                class="title-icon-2"
                src="../../assets/discuss.png"
                alt=""
                srcset=""
              />
              女性在职场酒局中需要注意的安全问题
            </div>
            <div class="right-item">
              <img
                class="title-icon-2"
                src="../../assets/discuss.png"
                alt=""
                srcset=""
              />
              上海有没有安全干净的酒店推荐
            </div>
          </div>
        </div>
        <div class="right-bottom-icon">
          <img class="beauty_icon" src="../../assets/right_bottom_bg.jpg" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import HeadNav from "@/components/HeadNav";
import Footer from "@/components/Footer.vue";
import { ElInput } from "element-plus";
import { useRouter } from "vue-router";
import { queryCommentsByTweetId, createComments } from "@/api/index";
import { useStore } from "vuex";

export default defineComponent({
  components: { HeadNav, ElInput, Footer },
  setup() {
    // 定义变量
    const inputValue = ref("");
    const item = ref(``);
    const Router = useRouter();
    const pageQuery = ref("");
    const commentArr = reactive([]);
    const Store = useStore();

    pageQuery.value = JSON.parse(Router.currentRoute.value.query.detail);
    item.value = pageQuery.value;

    // 在组件挂载后执行的操作
    onMounted(async () => {
      // 发起请求
      await initComment();
    });

    const initComment = async () => {
      const result = await queryCommentsByTweetId({
        tweet_id: item.value._id,
      });
      let arr = result.data.reverse().slice(0, 5);
      while (commentArr.length) {
        commentArr.pop();
      }
      for (let item of arr) {
        commentArr.push(item);
      }
    };

    const publishComment = async (item) => {
      if (!inputValue.value) {
        alert("请输入评论内容");
        return;
      }
      //发布评论
      const result = await createComments({
        tweet_id: item._id,
        author: Store.state.user.username,
        content: inputValue.value,
      });
      alert(result.message);
      await initComment();
    };

    return {
      inputValue,
      publishComment,
      item,
      commentArr,
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
  padding-top: 30px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );

  .left-container {
    position: relative;
    width: 48%;
    height: 100%;
    margin-left: 80px;

    .left-title {
      height: 50px;
      font-size: 24px;
      line-height: 50px;
      text-align: left;
      margin-top: 20px;
      border-radius: 12px;
      font-weight: 600;
      color: #666;
      padding-left: 20px;
      box-sizing: border-box;
    }

    .left-title2 {
      height: 50px;
      font-size: 18px;
      line-height: 50px;
      text-align: left;
      margin-top: 20px;
      border-radius: 12px;
      font-weight: 600;
      color: #666;
      padding-left: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: end;
      .author-box {
        padding-right: 15px;
      }
      .time-box {
        font-size: 16px;
        color: #bbbbbb;
      }
    }

    .article-container {
      padding: 20px;
      font-size: 16px;
      height: auto;
      margin-bottom: 20px;
      border-radius: 12px;
      text-align: left;
    }

    .comment-container {
      height: auto;
      margin-top: 10px;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: 5px 5px 5px #eee;
      border-radius: 12px;
      margin-bottom: 30px;
      padding: 10px;
      box-sizing: border-box;
    }

    .comment-title {
      font-size: 24px;
      font-weight: 600;
      color: #454;
      margin-top: 40px;
      margin-bottom: 20px;
      margin-left: 5px;
      text-align: left;
    }

    .comment-item {
      height: auto;
      line-height: 50px;
      font-size: 16px;
      margin-left: 10px;
      text-align: left;
      display: flex;
      &:not(:last-child) {
        border-bottom: 0.5px solid #ddd;
      }
      .comment-author {
        height: 100%;
        font-size: 16px;
        font-weight: 700;
      }
      .comment-content {
        margin-left: 10px;
        height: 100%;
        font-size: 16px;
      }
    }

    .publish-box {
      margin-top: 40px;
      margin-bottom: 20px;
      .publish-article {
        border-radius: 12px;
        box-shadow: 5px 5px 5px #eee;
        width: 100%;
      }
      .publish-article-input {
        border-radius: 12px;
        width: 100%;
      }
      // 改变input框背景颜色
      /deep/.el-textarea__inner {
        background-color: rgba(255, 255, 255, 0.7) !important;
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
        cursor: pointer;
      }
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
      margin-top: 20px;
      text-align: center;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: 5px 5px 5px #eee;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .right-one {
      height: 80%;
      margin-top: 30px;
      margin-bottom: 30px;
      .item-container-one {
        background-color: rgba(255, 255, 255, 0.7);
        box-shadow: 5px 5px 5px #eee;
        border-radius: 12px;
        padding: 10px 0px;
        .right-item {
          height: 50px;
          line-height: 40px;
          font-size: 16px;
          margin-left: 20px;
          text-align: left;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }
    }

    .right-bottom-icon {
      width: 100%;
      height: 100%;
      .beauty_icon {
        width: 100%;
        box-shadow: 5px 5px 5px #eee;
        border-radius: 12px;
      }
    }
  }
}

.title-icon {
  width: 30px;
  height: 30px;
}

.title-icon-2 {
  width: 20px;
  height: 20px;
  padding-right: 5px;
}
</style>