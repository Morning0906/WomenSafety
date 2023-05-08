<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="left-title">{{ article.title }}</div>
        <div class="article-container">
          <pre>{{ article.content }}</pre>
          <div class="article-cr">cr:小红书</div>
        </div>
      </div>
      <div class="right-container">
        <div class="right-title">
          <img
            class="title-icon"
            src="../../assets/advice.png"
            alt=""
            srcset=""
          />更多文章
        </div>
        <div class="right-one">
          <div class="item-container-one">
            <div
              class="right-item"
              v-for="(i, index) in dataTitleArr"
              :key="index"
              @click="refreshNewData(i)"
            >
              <img
                class="news-icon"
                src="../../assets/article.png"
                alt=""
                srcset=""
              />
              {{ i.title }}
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
import { defineComponent, onMounted, reactive, ref } from "vue";
import HeadNav from "@/components/HeadNav";
import Footer from "@/components/Footer";
import { useRouter } from "vue-router";
import { queryAdvise, findAdviseById } from "@/api/index";

export default defineComponent({
  components: { HeadNav, Footer },
  setup() {
    // 定义变量
    const article = reactive({
      author: "",
      title: "",
      content: "",
    });
    const data = ref(``);
    const Router = useRouter();
    let dataTitleArr = reactive([]);

    onMounted(async () => {
      let id = Router.currentRoute.value.query.id;
      let result = await findAdviseById({
        id,
      });
      let data = result.data;
      article.author = data.author;
      article.title = data.title;
      article.content = data.content;

      await moreAdivice();
    });

    // 更多文章
    const moreAdivice = async () => {
      const result = await queryAdvise();
      let dataTitle = result.data.reverse().slice(0, 6);
      while (dataTitleArr.length) {
        dataTitleArr.pop();
      }
      for (let item of dataTitle) {
        dataTitleArr.push(item);
      }
    };

    // 重新请求数据
    const refreshNewData = async (event) => {
      let result = await findAdviseById({
        id: event._id,
      });
      let data = result.data;
      article.author = data.author;
      article.title = data.title;
      article.content = data.content;
    };

    return {
      data,
      article,
      dataTitleArr,
      refreshNewData,
    };
  },
});
</script>

<style lang="less" scoped>
.page {
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
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );
  padding: 30px 50px 0;
  box-sizing: border-box;

  .left-container {
    position: relative;
    width: 58%;
    height: 100%;
    .left-title {
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: 5px 5px 5px #eee;
      border-radius: 12px;
    }
    .article-container {
      padding: 20px;
      font-size: 18px;
      height: 600px;
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: 5px 5px 5px #eee;
      border-radius: 12px;
      overflow-y: scroll;
      text-align: left;
      white-space: pre-warp;
      pre {
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      .article-cr {
        text-align: right;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 20px;
      }
    }

    // 滚动条样式
    .article-container::-webkit-scrollbar {
      height: 95%;
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
    width: 30%;
    height: 100%;
    .right-title {
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      justify-content: center;
      display: flex;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: 5px 5px 5px #eee;
      border-radius: 12px;
    }
    .right-one {
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: 5px 5px 5px #eee;
      border-radius: 12px;
      padding: 10px 0;
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
    .right-item {
      width: 85%;
      height: 50px;
      line-height: 40px;
      font-size: 16px;
      margin-left: 20px;
      margin-right: 10px;
      text-align: left;
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .right-item:hover {
      text-decoration: underline;
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

  .title-icon {
    width: 30px;
    height: 30px;
  }

  .news-icon {
    width: 20px;
    height: 20px;
    padding-right: 10px;
  }
}
</style>