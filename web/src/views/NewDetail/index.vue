<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="left-title">
          {{ item.title }}
        </div>
        <div class="article-container">
          <div class="cr-box">
            <div class="cr-name">@{{ item.author }}</div>
            <div class="time-box">2023-01-02 06:46</div>
          </div>
          <pre>{{ item.content }}</pre>
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
            <div class="right-item">
              <img
                class="news-icon"
                src="../../assets/article.png"
                alt=""
                srcset=""
              />
              联合国秘书长：为妇女和女孩打造安全数字环境，向侵犯女性的网络用户与平台追责
            </div>
            <div class="right-item">
              <img
                class="news-icon"
                src="../../assets/article.png"
                alt=""
                srcset=""
              />多品牌联合发起女性安全公益项目，推广三短一长求助眼语
            </div>
            <div class="right-item">
              <img
                class="news-icon"
                src="../../assets/article.png"
                alt=""
                srcset=""
              />
              网约车女性出行报告发布，女性安全出行问题应得到持续关注
            </div>
            <div class="right-item">
              <img
                class="news-icon"
                src="../../assets/article.png"
                alt=""
                srcset=""
              />
              T3出行推多项举措,保障女性深夜出行安全
            </div>
            <div class="right-item">
              <img
                class="news-icon"
                src="../../assets/article.png"
                alt=""
                srcset=""
              />
              滴滴顺风车推出女性专属保护计划,就安全产品征求公众意见
            </div>
            <div class="right-item">
              <img
                class="news-icon"
                src="../../assets/article.png"
                alt=""
                srcset=""
              />
              《民法典》对婚内女性权利的保护
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
import { defineComponent, ref } from "vue";
import HeadNav from "@/components/HeadNav";
import Footer from "@/components/Footer";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { HeadNav, Footer },
  // props: {
  //   item: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  setup() {
    // 定义变量
    const data = ref(``);
    const item = ref(``);
    const Router = useRouter();
    const pageQuery = ref("");
    pageQuery.value = JSON.parse(Router.currentRoute.value.query.detail);
    item.value = pageQuery.value;

    const item = ref(``);
    const Router = useRouter();
    const pageQuery = ref('');
    pageQuery.value = JSON.parse(Router.currentRoute.value.query.detail)
    item.value = pageQuery.value;
    
    return {
      data,
      item,
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
      .cr-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        .cr-name {
          margin-right: 10px;
          font-weight: 500;
          color: blue;
        }
        .time-box {
          text-align: center;
          color: silver;
        }
      }
      ul {
        li {
          margin-bottom: 10px;
        }
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
      width: 100%;
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