<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="left-title">
          <img
            class="title-icon"
            src="../../assets/advice.png"
            alt=""
            srcset=""
          />
          女性安全建议
        </div>
        <div class="left-one">
          <div class="left-mini-title">
            <img
              class="title-icon-3"
              src="../../assets/tips.png"
              alt=""
              srcset=""
            />
            独居 · Live Alone
          </div>
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
          <div class="left-mini-title">
            <img
              class="title-icon-3"
              src="../../assets/tips.png"
              alt=""
              srcset=""
            />
            出行 · Outside
          </div>
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
          <div class="left-mini-title">
            <img
              class="title-icon-3"
              src="../../assets/tips.png"
              alt=""
              srcset=""
            />
            日常 · Daily
          </div>
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
          <div class="news-box-title">
            <img
              class="title-icon"
              src="../../assets/news-1.png"
              alt=""
              srcset=""
            />最新资讯
          </div>
          <div class="main-news">
            <div class="main-news-title">
              <img
                class="title-icon-2"
                src="../../assets/new.png"
                alt=""
                srcset=""
              />
              <router-link to="/newdetail"
                >联合国秘书长：为妇女和女孩打造安全数字环境，向侵犯女性的网络用户与平台追责</router-link
              >
            </div>
            <div class="main-news-article">
              联合国新闻3月8日消息，在联合国大会8日为国际妇女节举行的庆祝活动上，联合国秘书长古特雷斯在致辞中提出三个方面的行动倡议。
              古特雷斯首先提出，必须打破让妇女和女孩“掉线”的障碍。其中包括刻板印象阻碍女孩从小学习科学和数学，在数字技能方面的教育与培训处于低水平，以及难以获取数字设备、数据和就业机会。
            </div>
            <div class="main-news-title">
              <img
                class="title-icon-2"
                src="../../assets/new.png"
                alt=""
                srcset=""
              />
              <router-link to="/newdetail"
                >多品牌联合发起女性安全公益项目，推广三短一长求助眼语</router-link
              >
            </div>
            <div class="main-news-article">
              1月31日，国内顶尖创意热店上海天与空广告有限公司（下简称天与空）联合17家品牌和媒体，针对女性可能遇到的无法呼救的危险情况，在网络平台发起“求助眼语”公益项目，推广“三短一长”求助眼语，致力提高女性在特殊情况下成功求助的可能性，受到了社会各界的好评。
            </div>
            <div class="main-news-title">
              <img
                class="title-icon-2"
                src="../../assets/new.png"
                alt=""
                srcset=""
              />
              <router-link to="/newdetail"
                >2022年度女性新闻｜每一个事件中的“她”，都可能是“我们”</router-link
              >
            </div>
            <div class="main-news-article">
              我们关注女性新闻，并不只看见新闻中那一个“她”的困境与呼喊，更有强烈的代入感，如果是“我”，又当如何？
              2022十大女性新闻事件，涉及妇女发展与制度保障、女性职业发展和生育支持、女性婚姻权益保障、女童和未成年人特殊保护、女性人身安全、社会性别意识等等领域。
            </div>
            <div class="main-news-title">
              <img
                class="title-icon-2"
                src="../../assets/new.png"
                alt=""
                srcset=""
              />
              <router-link to="/newdetail"
                >网约车女性出行报告发布，女性安全出行问题应得到持续关注</router-link
              >
            </div>
            <div class="main-news-article">
              中国妇女报全媒体记者韩亚聪 发自北京
              46.99%在40岁以上、62.3%为高中及以上学历、65.06%每天睡眠时长小于7小时……5月8日，由中国城市公共交通协会指导，中国城市公共交通协会融媒体中心和网约车会主办的首届国际女性出行发展论坛在北京举办。论坛上发布了《迎光而行——女性出行行业报告》，勾勒出网约车司机群体中的女性画像，解读网约车女性乘客出行数据。
            </div>
          </div>
          <!-- 分页按钮 -->
          <div class="pigi-box">
            <el-pagination
              large
              background
              layout="prev, pager, next"
              :total="50"
              class="mt-4"
            />
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
import { ElCarousel, ElPagination } from "element-plus";

export default defineComponent({
  components: { HeadNav, Footer, ElCarousel, ElPagination },
  setup() {
    // 定义变量
    const data = ref("");
    const swiperRef = ref(null);
    const liveAlone = reactive([]);
    const Outside = reactive([]);
    const Daily = reactive([]);

    // 在组件挂载后执行的操作
    onMounted(async () => {
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
    margin-left: 60px;
    .left-title {
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #888;
    }
    .left-one {
      margin-top: 30px;
    }
    .left-two {
      margin-top: 30px;
      height: auto;
      .item-container-two {
        height: auto;
      }
    }
    .left-three {
      margin-top: 30px;
      height: auto;
      .item-container-three {
        height: auto;
      }
    }
    .left-mini-title {
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      margin-left: 20px;
      text-align: left;
      display: flex;
      align-items: start;
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
        display: flex;
        justify-content: center;
        text-align: center;
      }
      .main-news {
        margin: 30px;
        .main-news-title {
          margin-top: 40px;
          font-size: 20px;
          text-align: left;
          display: flex;
        }
        .main-news-article {
          margin-top: 10px;
          font-size: 14px;
          text-align: left;
        }
      }
      .pigi-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        :deep(
            .el-pagination.is-background
              .el-pager
              li:not(.is-disabled).is-active
          ) {
          color: #000;
          background-color: rgba(
            255,
            244,
            228,
            0.7
          ) !important; //修改默认的背景色
        }
      }
    }
  }
}

.title-icon {
  width: 30px;
  height: 30px;
}

.title-icon-2 {
  width: 28px;
  height: 28px;
  padding-right: 5px;
}

.title-icon-3 {
  width: 26px;
  height: 26px;
  padding-right: 5px;
  padding-top: 10px;
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
