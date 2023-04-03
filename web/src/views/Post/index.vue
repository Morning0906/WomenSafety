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
        <!-- 发布评论 -->
        <div class="publish-box">
          <div class="publish-article">
            <el-input
              class="publish-article-input"
              v-model="inputValue"
              placeholder="请输入内容"
              type="textarea"
              rows="5"
              size="large"
            ></el-input>
          </div>
          <div class="publish-button" @click="publishComment()">发布评论</div>
        </div>
        <div class="comment-container">
          <div class="comment-title">全部评论</div>
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
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeadNav from "@/components/HeadNav";
import { ElInput } from "element-plus";

export default defineComponent({
  components: { HeadNav, ElInput },
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
  height: 1100px;
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
      background-color: #f5f4f1;
      overflow-y: scroll;
    }

    .comment-container {
      height: auto;
      margin-top: 20px;
      background-color: #f5f4f1;
      margin-bottom: 30px;
    }

    .comment-title {
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      margin-left: 20px;
      text-align: left;
    }
    .comment-item {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      margin-left: 20px;
      text-align: left;
      display: flex;
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
      height: 200px;
      background-color: #d8d8d8;
      .publish-article {
        width: 100%;
      }
      .publish-article-input {
        border-radius: 6px;
        margin-top: 20px;
        width: 95%;
        // height: 120px;
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