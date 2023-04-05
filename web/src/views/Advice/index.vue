<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="advice-box-title">发现建议</div>
      <div class="box-item-container">
        <div class="left-container">
          <div class="top-icon">
            <img src="@/assets/advice-1.png" alt="" />
          </div>
          <div class="left-title">独居安全</div>
          <div class="left-one">
            <div class="item-container-one">
              <div class="left-item">· This is an axample article.</div>
              <div class="left-item">· This is an axample article.</div>
              <div class="left-item">· This is an axample article.</div>
            </div>
          </div>
        </div>
        <div class="left-container">
          <div class="top-icon">
            <img src="@/assets/advice-2.png" alt="" />
          </div>
          <div class="left-title">独居安全</div>
          <div class="left-one">
            <div class="item-container-one">
              <div class="left-item">· This is an axample article.</div>
              <div class="left-item">· This is an axample article.</div>
              <div class="left-item">· This is an axample article.</div>
            </div>
          </div>
        </div>
        <div class="left-container">
          <div class="top-icon">
            <img src="@/assets/advice-3.png" alt="" />
          </div>
          <div class="left-title">独居安全</div>
          <div class="left-one">
            <div class="item-container-one">
              <div class="left-item">· This is an axample article.</div>
              <div class="left-item">· This is an axample article.</div>
              <div class="left-item">· This is an axample article.</div>
            </div>
          </div>
        </div>
        <div class="left-container">
          <div class="top-icon">
            <img src="@/assets/advice-4.png" alt="" />
          </div>
          <div class="left-title">独居安全</div>
          <div class="left-one">
            <div class="item-container-one">
              <div class="left-item">· This is an axample article.</div>
              <div class="left-item">· This is an axample article.</div>
              <div class="left-item">· This is an axample article.</div>
            </div>
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

export default defineComponent({
  components: { HeadNav, Footer },
  setup() {
    // 定义变量
    const data = ref(
      "可恶！！！就是语法问题，你个家伙，自己看我Test这个index.vue的写法！"
    );
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
  padding-bottom: 160px;
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );

  .advice-box-title {
    font-size: 28px;
    font-weight: 600;
    color: #444;
    text-align: left;
    padding-left: 40px;
    padding-top: 50px;
  }

  .box-item-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .left-container {
      margin-top: 30px;
      width: 29%;
      height: 250px;
      margin-left: 40px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 5px 5px 5px #eee;
      padding: 20px;
      box-sizing: border-box;
      .top-icon {
        text-align: left;
        img {
          width: 56px;
          height: 56px;
        }
      }
      .left-title {
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
        line-height: 26px;
        font-size: 14px;
        color: #999;
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
}
</style>