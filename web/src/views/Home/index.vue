<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="left-title">
          <img
            class="advice-icon"
            src="../../assets/advice.png"
            alt=""
            srcset=""
          />
          女性安全建议
        </div>
        <div class="left-one">
          <div class="left-mini-title">Live Alone</div>
          <div class="item-container-one">
            <div class="left-item">
              <router-link to="/article"
                >1. This is an axample article.</router-link
              >
            </div>
            <div class="left-item">2. This is an axample article.</div>
            <div class="left-item">3. This is an axample article.</div>
          </div>
          <div class="more-box">
            <router-link to="/advice">More</router-link>
          </div>
        </div>
        <div class="left-two">
          <div class="left-mini-title">Outside</div>
          <div class="item-container-two">
            <div class="left-item">1. This is an axample article.</div>
            <div class="left-item">2. This is an axample article.</div>
            <div class="left-item">3. This is an axample article.</div>
            <div class="left-item">4. This is an axample article.</div>
          </div>
          <div class="more-box">
            <router-link to="/advice">More</router-link>
          </div>
        </div>
        <div class="left-three">
          <div class="left-mini-title">Daily</div>
          <div class="item-container-three">
            <div class="left-item">1. This is an axample article.</div>
            <div class="left-item">2. This is an axample article.</div>
            <div class="left-item">3. This is an axample article.</div>
            <div class="left-item">4. This is an axample article.</div>
            <div class="left-item">5. This is an axample article.</div>
          </div>
          <div class="more-box">
            <router-link to="/advice">More</router-link>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="video-box">
          <!-- 轮播图 -->
          <div class="swiper-container" ref="swiperRef">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <iframe
                  src="https://player.bilibili.com/player.html?aid=463651746&bvid=BV1aL411G7Ny&cid=427473421&page=1&autoplay=no"
                  width="100%"
                  height="400px"
                  scrolling="no"
                  border="0"
                  frameborder="no"
                  framespacing="0"
                  allowfullscreen="allowfullscreen"
                >
                </iframe>
              </div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
            </div>
          </div>
        </div>
        <div class="news-box">
          <div class="news-box-title">最新资讯</div>
          <div class="main-news">
            <div class="main-news-title">
              <a href="https://m.weibo.cn/status/4879147178397748"
                >联合国秘书长：为妇女和女孩打造安全数字环境，向骚扰侵犯女性的网络用户与平台追责</a
              >
            </div>
            <div class="main-news-article">
              联合国新闻3月8日消息，在联合国大会8日为国际妇女节举行的庆祝活动上，联合国秘书长古特雷斯在致辞中提出三个方面的行动倡议。
              古特雷斯首先提出，必须打破让妇女和女孩“掉线”的障碍。其中包括刻板印象阻碍女孩从小学习科学和数学，在数字技能方面的教育与培训处于低水平，以及难以获取数字设备、数据和就业机会。
            </div>
            <div class="main-news-title">
              <a href="https://m.weibo.cn/status/4879147178397748"
                >联合国秘书长：为妇女和女孩打造安全数字环境，向骚扰侵犯女性的网络用户与平台追责</a
              >
            </div>
            <div class="main-news-article">
              联合国新闻3月8日消息，在联合国大会8日为国际妇女节举行的庆祝活动上，联合国秘书长古特雷斯在致辞中提出三个方面的行动倡议。
              古特雷斯首先提出，必须打破让妇女和女孩“掉线”的障碍。其中包括刻板印象阻碍女孩从小学习科学和数学，在数字技能方面的教育与培训处于低水平，以及难以获取数字设备、数据和就业机会。
            </div>
            <div class="main-news-title">
              <a href="https://m.weibo.cn/status/4879147178397748"
                >联合国秘书长：为妇女和女孩打造安全数字环境，向骚扰侵犯女性的网络用户与平台追责</a
              >
            </div>
            <div class="main-news-article">
              联合国新闻3月8日消息，在联合国大会8日为国际妇女节举行的庆祝活动上，联合国秘书长古特雷斯在致辞中提出三个方面的行动倡议。
              古特雷斯首先提出，必须打破让妇女和女孩“掉线”的障碍。其中包括刻板印象阻碍女孩从小学习科学和数学，在数字技能方面的教育与培训处于低水平，以及难以获取数字设备、数据和就业机会。
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import HeadNav from "@/components/HeadNav";
import Footer from "@/components/Footer";
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";

export default defineComponent({
  components: { HeadNav, Footer },
  setup() {
    // 定义变量
    const data = ref("");
    const swiperRef = ref(null);

    // 在组件挂载后执行的操作
    onMounted(() => {
      new Swiper(swiperRef.value, {
        direction: "horizontal",
        loop: true,
      });
    });

    return {
      data,
      swiperRef,
    };
  },
});
</script>

<style lang="less" scoped>
.main-container {
  position: relative;
  width: 100%;
  display: flex;
  padding-top: 80px;
  padding-bottom: 100px;
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );

  .left-container {
    width: 30%;
    height: 100%;
    margin-left: 50px;
    // background-color: #f5f4f1;
    .left-title {
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
      height: 240px;
      margin-top: 30px;
      // background-color: #f5f4f1;
      .item-container-one {
        height: 150px;
      }
    }
    .left-two {
      margin-top: 30px;
      height: 300px;
      // background-color: #f5f4f1;
      .item-container-two {
        height: 200px;
      }
    }
    .left-three {
      margin-top: 30px;
      height: 350px;
      // background-color: #f5f4f1;
      .item-container-three {
        height: 250px;
      }
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
      // background-color: #fff;
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
  .right-container {
    width: 60%;
    height: 100%;
    margin-left: 30px;
    margin-right: 50px;
    .video-box {
      height: 400px;
      background-color: #ededed;
    }
    .news-box {
      // height: 450px;
      margin-top: 30px;
      background-color: #ededed;
      border-radius: 8px;
      padding: 30px 15px;
      .news-box-title {
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        margin-top: 10px;
      }
      .main-news {
        // height: 200px;
        margin: 30px;
        .main-news-title {
          margin-top: 40px;
          font-size: 18px;
          text-align: left;
        }
        .main-news-article {
          margin-top: 10px;
          font-size: 14px;
          text-align: left;
        }
      }
    }
  }

  // 轮播图
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
