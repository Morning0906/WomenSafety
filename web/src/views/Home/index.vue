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
              <div @click="jumpToArticle(item)">
                {{ index + 1 }}. {{ item.title }}
              </div>
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
              <div @click="jumpToArticle(item)">
                {{ index + 1 }}. {{ item.title }}
              </div>
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
              <div @click="jumpToArticle(item)">
                {{ index + 1 }}. {{ item.title }}
              </div>
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
            <div
              v-for="(item, index) in newsList.slice(
                (currentPage - 1) * PageSize,
                currentPage * PageSize
              )"
              :key="index"
            >
              <div class="main-news-title">
                <img
                  class="title-icon-2"
                  src="../../assets/new.png"
                  alt=""
                  srcset=""
                />
                <div @click="jumpEvent(item)">{{ item.title }}</div>
              </div>
              <div class="main-news-article">
                {{ item.content }}
              </div>
            </div>
          </div>
          <!-- 分页按钮 -->
          <div class="pigi-box">
            <el-pagination
              @current-change="handleCurrentChange"
              :v-model="currentPage.value"
              :page-size="PageSize"
              :total="totalCount"
              large
              background
              layout="prev, pager, next"
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
import { useRouter } from "vue-router";
import { queryAdvise, queryNews } from "@/api/index";
import { ElCarousel, ElPagination } from "element-plus";

export default defineComponent({
  components: { HeadNav, Footer, ElCarousel, ElPagination },
  setup() {
    // 定义变量
    const Router = useRouter();
    const data = ref("");
    const swiperRef = ref(null);
    const liveAlone = reactive([]);
    const Outside = reactive([]);
    const Daily = reactive([]);
    const newsList = reactive([]);
    // 默认显示第一页
    const currentPage = ref("1");
    // 总的数据条数
    const totalCount = ref("0");
    // 默认每页显示的条数（可修改）
    let PageSize = 4;

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

      // 发起新闻列表请求
      const newsResult = await queryNews();
      console.log(newsResult);
      totalCount.value = newsResult.data.length;
      // ref数据要.value
      // newsList = newsResult.data.map(item => item);
      for (let item of newsResult.data) {
        newsList.push(item);
      }
    });

    // 显示第几页
    function handleCurrentChange(pageNumber) {
      // 改变默认的页数
      currentPage.value = pageNumber;
    }

    const jumpEvent = (item) => {
      Router.push({
        path: "NewDetail",
        query: { detail: JSON.stringify(item) },
      });
    };
    const jumpToArticle = (item) => {
      Router.push({
        path: "Article",
        query: { id: item._id },
      });
    };

    return {
      data,
      liveAlone,
      Outside,
      Daily,
      newsList,
      currentPage,
      totalCount,
      PageSize,
      handleCurrentChange,
      jumpEvent,
      jumpToArticle,
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
      cursor: pointer;
    }
    .left-item:hover {
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
          cursor: pointer;
        }
        .main-news-title:hover {
          text-decoration: underline;
        }
        .main-news-article {
          margin-top: 10px;
          font-size: 14px;
          text-align: left;
          display: -webkit-box; /* 将文本设置为弹性容器 */
          -webkit-box-orient: vertical; /* 垂直方向 */
          -webkit-line-clamp: 4; /* 设置最大行数 */
          overflow: hidden; /* 当文本超出2行时，隐藏溢出部分 */
          text-overflow: ellipsis; /* 在行末显示省略号 */
        }
      }
      .pigi-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        :deep(.el-pagination.is-background
            .el-pager
            li:not(.is-disabled).is-active) {
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
