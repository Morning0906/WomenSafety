<template>
  <div class="page">
    <HeadNav/>
    <div class="titlebar">Women Safety</div>
    <div class="main-container">
      <div class="left-container">
        <div class="left-title">· Suggestion List</div>
        <div class="left-one">
          <div class="left-mini-title">Live Alone</div>
          <div class="left-item">This is an axample article.</div>
          <div class="left-item">This is an axample article.</div>
          <div class="left-item">This is an axample article.</div>
        </div>
        <div class="left-two">
          <div class="left-mini-title">Outside</div>
          <div class="left-item">This is an axample article.</div>
          <div class="left-item">This is an axample article.</div>
          <div class="left-item">This is an axample article.</div>
          <div class="left-item">This is an axample article.</div>
        </div>
        <div class="left-three">
          <div class="left-mini-title">Daily</div>
          <div class="left-item">This is an axample article.</div>
          <div class="left-item">This is an axample article.</div>
          <div class="left-item">This is an axample article.</div>
          <div class="left-item">This is an axample article.</div>
          <div class="left-item">This is an axample article.</div>
        </div>
      </div>
      <div class="right-container">
        <div class="video-box">
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
              第二，必须增强妇女在科技领域的参与度和领导力，为此要扩大招聘渠道，在必要时可使用配额。古特雷斯强调，如果没有女性的领导，世界上硅谷这样的科技集群不会颠覆父权制：性别歧视会因此被数字化，不平等现象将成为永恒；如果没有女性的贡献，性别不平等从一开始就会被写入未来数字产品和服务的代码之中。
              古特雷斯提出的第三点倡议是要为妇女和女孩打造安全的数字环境，向骚扰和侵犯女性的网络用户与平台追究责任。他说，“这就是为什么我要呼吁政府、监管机构、科技公司和媒体去阻止仇恨，设置‘围栏’举措并予以执行；这也是为什么我们正在努力推进相关的工作，为实现数字平台上的信息诚信制定一套行为准测。”
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeadNav from "@/components/HeadNav"

export default defineComponent({
  components: {HeadNav},
  setup() {
    // 定义变量
    const data = ref("可恶！！！就是语法问题，你个家伙，自己看我Test这个index.vue的写法！");
    return {
      data,
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
  height: 1000px;
  margin-top: 30px;
  display: flex;

  .left-container {
    width: 30%;
    height: 100%;
    margin-left: 50px;
    .left-title {
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      background-color: #f5f4f1;
    }
    .left-one {
      height: 200px;
      margin-top: 30px;
      background-color: #f5f4f1;
    }
    .left-two {
      margin-top: 30px;
      height: 250px;
      background-color: #f5f4f1;
    }
    .left-three {
      margin-top: 30px;
      height: 300px;
      background-color: #f5f4f1;
    }
    .left-mini-title {
      height: 50px;
      font-size: 20px;
      margin-left: 20px;
      // margin-top: 10px;
      text-align: left;
    }
    .left-item {
      height: 50px;
      font-size: 16px;
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
      height: 450px;
      margin-top: 30px;
      background-color: #ededed;
      .news-box-title {
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        margin-top: 10px;
      }
      .main-news {
        height: 200px;
        margin: 30px;
        .main-news-title {
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
}
</style>
