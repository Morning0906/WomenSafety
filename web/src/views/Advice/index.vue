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
              <div class="left-item">· 女士一个人住, 有哪些需要注意?</div>
              <div class="left-item">· 我被标记了! 独居要警惕.</div>
              <div class="left-item">· 这些都是需要知道的常识.</div>
              <div class="left-item">· 一个人在外面, 一定要保护好自己.</div>
              <div class="left-item">· 独居生活注意指北.</div>
              <div class="left-item">· 在上海的独居生活. 指南篇!</div>
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
              <div class="left-item">· 出门必备的八大物品</div>
              <div class="left-item">· 出门打车的注意事项——与司机友好沟通.</div>
              <div class="left-item">· 如何与小区邻居处好关系, 提高安全性.</div>
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
              <div class="left-item">· 不要喝陌生人给你的水.</div>
              <div class="left-item">· 独自在公共场合, 不喝离开过自己视线的水.</div>
              <div class="left-item">· 坐电梯时, 尽量不要背对陌生人.</div>
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
              <div class="left-item">· 给紧急联系人电话设置快速拨号.</div>
              <div class="left-item">· 外出住宿时, 尽量选择正规品牌酒店就住.</div>
              <div class="left-item">· 睡前一定要反锁房门.</div>
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
      .item-list{
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