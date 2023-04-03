
<template>
  <div class="footer">
    <div class="author">
      <span class="before-desc">Created by </span>
      <a class="name" href="https://github.com/Morning0906">@Morning</a>
    </div>
    <div class="tag-desc">Women | Life | Future</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
// 脚注
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 80px;
  font-size: 14px;
  .author {
    .before-desc {
      color: #656565;
    }
    .name {
      color: #6a63f6;
    }
  }
  .tag-desc {
    color: #656565;
  }
}
</style>