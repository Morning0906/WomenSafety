<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="left-title">
          标题: 卧室里的烟雾报警器有红灯一闪一闪的，是摄像头吗？
        </div>
        <div class="article-container">
          独自出行本来是一个很自由的事情，但是因为男女主角不平等，女性独自出行要承担更大的风险。所以说你想要自由出行，
        </div>
        <!-- 发布评论 -->
        <div class="comment-title">书写评论</div>
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
          <div class="publish-button" @click="publishComment()">发布评论</div>
        </div>
        <div class="comment-container">
          <div class="comment-item">
            <div class="comment-author">Morning早早：</div>
            <div class="comment-content">leo老师我想你</div>
          </div>
          <div class="comment-item">
            <div class="comment-author">Morning早早：</div>
            <div class="comment-content">leo老师我想你</div>
          </div>
          <div class="comment-item">
            <div class="comment-author">Morning早早：</div>
            <div class="comment-content">leo老师我想你</div>
          </div>
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
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeadNav from "@/components/HeadNav";
import Footer from "@/components/Footer.vue";
import { ElInput } from "element-plus";

export default defineComponent({
  components: { HeadNav, ElInput, Footer },
  setup() {
    // 定义变量
    const inputValue = ref("");
    const publishComment = () => {
      //发布评论
    };
    return {
      inputValue,
      publishComment,
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
      font-size: 18px;
      line-height: 50px;
      text-align: left;
      background-color: #fff;
      box-shadow: 5px 5px 5px #eee;
      border-radius: 12px;
      font-weight: 600;
      color: #666;
      padding-left: 20px;
      box-sizing: border-box;
    }

    .article-container {
      padding: 20px;
      font-size: 14px;
      height: 200px;
      margin-top: 30px;
      margin-bottom: 20px;
      overflow-y: scroll;
      background-color: #fff;
      box-shadow: 5px 5px 5px #eee;
      border-radius: 12px;
      text-align: left;
    }

    .comment-container {
      height: auto;
      margin-top: 10px;
      background-color: #fff;
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
      margin-bottom: 10px;
      margin-left: 5px;
      text-align: left;
    }

    .comment-item {
      height: 50px;
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
      .publish-button {
        border-radius: 6px;
        height: 40px;
        line-height: 40px;
        width: 80px;
        font-size: 14px;
        margin-top: 10px;
        background-color: #c8a78d;
        color: #fff;
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
      text-align: center;
      background-color: #fff;
      box-shadow: 5px 5px 5px #eee;
      border-radius: 12px;
    }
    .right-one {
      height: 80%;
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: #f5f4f1;
      .item-container-one {
        background-color: #fff;
        box-shadow: 5px 5px 5px #eee;
        border-radius: 12px;
        padding: 10px 0px;
        .right-item {
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          margin-left: 20px;
          text-align: left;
        }
      }
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