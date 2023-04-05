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
          <div class="left-mini-title">独居 · Live Alone</div>
          <div class="item-container-one">
            <div
              class="left-item"
              v-for="(item, index) in liveAlone"
              :key="index"
            >
              <router-link to="/article"
                >{{ index + 1 }}. {{ item.title }}</router-link
              >
            </div>
          </div>
          <div class="more-box">
            <router-link to="/advice">More</router-link>
          </div>
        </div>
        <div class="left-two">
          <div class="left-mini-title">出行 · Outside</div>
          <div class="item-container-two">
            <div
              class="left-item"
              v-for="(item, index) in Outside"
              :key="index"
            >
              <router-link to="/article"
                >{{ index + 1 }}. {{ item.title }}</router-link
              >
            </div>
          </div>
          <div class="more-box">
            <router-link to="/advice">More</router-link>
          </div>
        </div>
        <div class="left-three">
          <div class="left-mini-title">日常 · Daily</div>
          <div class="item-container-three">
            <div class="left-item" v-for="(item, index) in Daily" :key="index">
              <router-link to="/article"
                >{{ index + 1 }}. {{ item.title }}</router-link
              >
            </div>
          </div>
          <div class="more-box">
            <router-link to="/advice">More</router-link>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="video-box">
          <!-- 轮播图 -->
          <el-carousel trigger="click" height="400px">
            <el-carousel-item>
              <iframe
                src="https://player.bilibili.com/player.html?aid=648094433&bvid=BV1be4y1g7t1&cid=902443320&page=1&autoplay=no"
                width="100%"
                height="400px"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </el-carousel-item>
            <el-carousel-item>
              <iframe
                src="https://player.bilibili.com/player.html?aid=424106104&bvid=BV1B341177rT&cid=510508436&page=1&autoplay=no"
                width="100%"
                height="400px"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </el-carousel-item>
            <el-carousel-item>
              <iframe
                src="https://player.bilibili.com/player.html?aid=927815614&bvid=BV1UK4y1Z7Yu&cid=256863453&page=1&autoplay=no"
                width="100%"
                height="400px"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </el-carousel-item>
            <el-carousel-item>
              <iframe
                src="https://player.bilibili.com/player.html?aid=731964773&bvid=BV1ND4y1b7qE&cid=871414280&page=1&autoplay=no"
                width="100%"
                height="400px"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </el-carousel-item>
            <el-carousel-item>
              <iframe
                src="https://player.bilibili.com/player.html?aid=459523411&bvid=BV1H5411K7zr&cid=307646056&page=1&autoplay=no"
                width="100%"
                height="400px"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </el-carousel-item>
          </el-carousel>
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
import { defineComponent, ref, onMounted, reactive } from "vue";
import HeadNav from "@/components/HeadNav";
import Footer from "@/components/Footer";
import { queryAdvise } from "@/api/index";
import { ElCarousel } from "element-plus";

export default defineComponent({
  components: { HeadNav, Footer, ElCarousel },
  setup() {
    // 定义变量
    const data = ref("");
    const swiperRef = ref(null);
    const liveAlone = reactive([]);
    const Outside = reactive([]);
    const Daily = reactive([]);

    // 在组件挂载后执行的操作
    onMounted(async () => {
      new Swiper(swiperRef.value, {
        direction: "horizontal",
        loop: true,
      });
      // 发起请求
      const result = await queryAdvise();
      console.log(result);
      // 过滤独居类(type == 1)的信息
      let dataArr1 = result.data.filter((item) => {
        return item.type === 1;
      });
      // 存储到显示变量liveAlone
      for (let item of dataArr1) {
        liveAlone.push(item);
      }
      // 过滤出行类(type == 2)的信息
      let dataArr2 = result.data.filter((item) => {
        return item.type === 2;
      });
      // 存储到显示变量Outside
      for (let item of dataArr2) {
        Outside.push(item);
      }
      // 过滤日常类(type == 3)的信息
      let dataArr3 = result.data.filter((item) => {
        return item.type === 3;
      });
      // 存储到显示变量Daily
      for (let item of dataArr3) {
        Daily.push(item);
      }
    });

    return {
      data,
      swiperRef,
      liveAlone,
      Outside,
      Daily,
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
      margin-top: 30px;
    }
    .left-two {
      margin-top: 30px;
      height: 300px;
      .item-container-two {
        height: 200px;
      }
    }
    .left-three {
      margin-top: 30px;
      height: 350px;
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
      margin-top: 30px;
      background-color: rgba(237, 237, 237, 0.5);
      border-radius: 8px;
      padding: 30px 15px;
      .news-box-title {
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        margin-top: 10px;
      }
      .main-news {
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 轮播图
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
