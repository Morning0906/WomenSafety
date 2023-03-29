<template>
  <div class="page">
    <HeadNav />
    <div class="main-container">
      <div class="left-container">
        <div class="left-title">独居安全</div>
        <div class="left-one">
          <div class="item-container-one">
            <div class="left-item">This is an axample article.</div>
            <div class="left-item">This is an axample article.</div>
            <div class="left-item">This is an axample article.</div>
          </div>
        </div>
      </div>
      <div class="left-container">
        <div class="left-title">独居安全</div>
        <div class="left-one">
          <div class="item-container-one">
            <div class="left-item">This is an axample article.</div>
            <div class="left-item">This is an axample article.</div>
            <div class="left-item">This is an axample article.</div>
          </div>
        </div>
      </div>
      <div class="left-container">
        <div class="left-title">出行安全</div>
        <div class="left-one">
          <div class="item-container-one">
            <div class="left-item">This is an axample article.</div>
            <div class="left-item">This is an axample article.</div>
            <div class="left-item">This is an axample article.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeadNav from "@/components/HeadNav";

export default defineComponent({
  components: { HeadNav },
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
  height: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  .left-container {
    width: 28%;
    height: 100%;
    .left-title {
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      background-color: #f5f4f1;
    }
    .left-one {
      height: 840px;
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: #f5f4f1;
      .item-container-one {
        height: 150px;
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
}
</style>