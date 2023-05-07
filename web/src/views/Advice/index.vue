<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="advice-box-title">发现更多</div>
      <div class="box-item-container">
        <div class="left-container">
          <div class="top-icon">
            <img src="@/assets/advice-1.png" alt="" />
          </div>
          <div class="left-title">独居安全</div>
          <div class="left-one">
            <div class="item-list">
              <div
                class="left-item"
                v-for="(item, index) in liveAlone"
                :key="index"
              >
                <div @click="jumpToArticle(item)">• {{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-container">
          <div class="top-icon">
            <img src="@/assets/advice-2.png" alt="" />
          </div>
          <div class="left-title">出行安全</div>
          <div class="left-one">
            <div class="item-list">
              <div
                class="left-item"
                v-for="(item, index) in Outside"
                :key="index"
              >
                <div @click="jumpToArticle(item)">• {{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-container">
          <div class="top-icon">
            <img src="@/assets/advice-3.png" alt="" />
          </div>
          <div class="left-title">日常安全</div>
          <div class="left-one">
            <div class="item-list">
              <div
                class="left-item"
                v-for="(item, index) in Daily"
                :key="index"
              >
                <div @click="jumpToArticle(item)">• {{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-container">
          <div class="top-icon">
            <img src="@/assets/advice-4.png" alt="" />
          </div>
          <div class="left-title">其他</div>
          <div class="left-one">
            <div class="item-list">
              <div
                class="left-item"
                v-for="(item, index) in Other"
                :key="index"
              >
                <div @click="jumpToArticle(item)">• {{ item.title }}</div>
              </div>
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
import Footer from "@/components/Footer.vue";
import { queryAdvise } from "@/api/index";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { HeadNav, Footer },
  setup() {
    // 定义变量
    const data = ref("");
    const liveAlone = reactive([]);
    const Outside = reactive([]);
    const Daily = reactive([]);
    const Other = reactive([]);
    const Router = useRouter();

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
      // 过滤日常类(type == 3)的信息
      let dataArr4 = result.data.filter((item) => {
        return item.type === 4;
      });
      // 存储到显示变量Daily
      for (let item of dataArr4) {
        Other.push(item);
      }
    });

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
      Other,
      jumpToArticle,
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
  padding-bottom: 60px;
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );

  .advice-box-title {
    margin-left: 60px;
    font-size: 28px;
    font-weight: 550;
    color: #444;
    text-align: left;
    padding-left: 40px;
    padding-top: 50px;
  }

  .box-item-container {
    margin-left: 50px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .left-container {
      margin-top: 30px;
      width: 27%;
      height: 280px;
      margin-left: 40px;
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 12px;
      box-shadow: 5px 5px 5px #eee;
      padding: 20px;
      box-sizing: border-box;
      .item-list {
        height: 120px;
        overflow-y: scroll;
      }
      // 滚动条样式
      .item-list::-webkit-scrollbar {
        width: 4px;
      }
      .item-list::-webkit-scrollbar-thumb {
        border-radius: 10px;
        // background: rgba(0, 0, 0, 0.2);
        background: transparent;
      }
      .item-list::-webkit-scrollbar-track {
        border-radius: 0;
        // background: rgba(0, 0, 0, 0.1);
        background: transparent;
      }
      .top-icon {
        text-align: left;
        img {
          width: 56px;
          height: 56px;
        }
      }
      .left-title {
        margin-left: 10px;
        margin-top: 12px;
        height: 50px;
        font-size: 18px;
        font-weight: 500;
        line-height: 50px;
        text-align: left;
      }
      .left-mini-title {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        margin-left: 20px;
        text-align: left;
      }
      .left-item {
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        color: #999;
        text-align: left;
      }
    }
  }
}
</style>