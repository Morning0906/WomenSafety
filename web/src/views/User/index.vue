<template>
  <HeadNav />
  <div class="user-container">
    <!-- 你好, username -->
    <div class="hello-username">
      <img class="title-icon" src="../../assets/heart.png" alt="" srcset="" />
      <h3>Hello, {{ username }}</h3>
    </div>

    <div class="user-box">
      <!-- 用户文章 -->
      <div class="user-article">
        <div class="title">我发布的帖子</div>

        <div class="item-tweet">
          <div class="avatar">
            <img src="../../assets/my-post.png" alt="User avatar" />
          </div>
          <div class="content">
            <div class="header">
              <span class="username">{{ username }}</span>
              <span class="date">2023-04-04</span>
            </div>
            <div class="text">有没有什么讲述女性安全的电影？</div>
          </div>
        </div>
        <div class="item-tweet">
          <div class="avatar">
            <img src="../../assets/my-post.png" alt="User avatar" />
          </div>
          <div class="content">
            <div class="header">
              <span class="username">{{ username }}</span>
              <span class="date">2023-04-03</span>
            </div>
            <div class="text">想去看livehouse，一个人去会不会不安全</div>
          </div>
        </div>
        <div class="item-tweet">
          <div class="avatar">
            <img src="../../assets/my-post.png" alt="User avatar" />
          </div>
          <div class="content">
            <div class="header">
              <span class="username">{{ username }}</span>
              <span class="date">2023-02-04</span>
            </div>
            <div class="text">女大学生如何更好的保护自身安全？</div>
          </div>
        </div>
      </div>
      <!-- 竖线分割 -->
      <div class="line"></div>
      <!-- 用户信息 -->
      <n-spin size="large" :show="loading">
        <div class="container">
          <div class="title">个人信息</div>
          <!-- 用户信息 -->
          <n-space vertical :size="distance">
            <!-- <n-space align="center">
              id值:
              <n-input
                v-model:value="userid"
                type="text"
                size="large"
                placeholder="请输入.."
                readonly
              />
            </n-space> -->
            <n-space align="center">
              用户:
              <n-input
                v-model:value="username"
                type="text"
                size="large"
                placeholder="请输入.."
                readonly
              />
            </n-space>
            <n-space align="center">
              密码:
              <n-input
                v-model:value="password"
                type="password"
                size="large"
                placeholder="请输入.."
                :show-password="false"
              />
            </n-space>
            <n-space align="center">
              性别:
              <n-input
                v-model:value="sex"
                type="text"
                size="large"
                placeholder="请输入.."
                readonly
              />
            </n-space>
            <n-space align="center">
              年龄:
              <n-input
                v-model:value="age"
                type="text"
                size="large"
                placeholder="请输入.."
              />
            </n-space>
            <n-space>
              <n-button strong secondary type="primary" @click="saveContent">
                {{ btnText }}
              </n-button>
            </n-space>
          </n-space>
        </div>
      </n-spin>
    </div>

    <div class="bottom-nav-box">
      <!-- 登出账户 -->
      <p class="logout-btn">
        <a @click="handleLogOut">
          <n-button strong secondary type="primary">
            {{ cancelable ? "确认" : "登出" + "账户" }}
          </n-button>
        </a>
        <template v-if="cancelable">
          ,
          <n-button strong secondary type="warning" @click="cancleLogOut">
            取消
          </n-button>
        </template>
      </p>
    </div>
  </div>

  <Footer />
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {
  NInput,
  NSpace,
  NDivider,
  NButton,
  NSpin,
  useNotification,
  NPopover,
} from "naive-ui";
import useReduceFn from "@/hooks/useReduceFn";
import { UpdateUserInfo } from "@/api/user";
import HeadNav from "@/components/HeadNav";

export default defineComponent({
  name: "User",
  components: {
    NInput,
    NSpace,
    NDivider,
    NButton,
    NSpin,
    NPopover,
    HeadNav,
  },
  setup() {
    const Store = useStore();
    const Router = useRouter();
    const username = ref("");
    const password = ref("");
    const avator = ref("");
    const userid = ref("");
    const sex = ref("");
    const age = ref("");
    const loading = ref(true);
    // 确认按钮文本
    const btnText = ref("修改信息");
    const notification = useNotification();
    let cancelable = ref(false);

    onMounted(() => {
      // 从store中获取数据
      userid.value = Store.state.user.userid;
      username.value = Store.state.user.username;
      password.value = Store.state.user.password;
      avator.value = Store.state.user.avator;
      age.value = Store.state.user.age;
      sex.value = Store.state.user.sex === 1 ? "男" : "女";
      loading.value = false;
    });

    // 定义消息通知
    const notify = (type, message) => {
      notification[type]({
        content: message,
        duration: 1500,
      });
    };

    // 登出
    function handleLogOut() {
      if (cancelable.value) {
        // TODO: 登出处理Store
        Store.commit("user/USER_LOGOUT");
        Router.push("/login");
      } else {
        cancelable.value = true;
      }
    }
    // 取消登出
    function cancleLogOut() {
      cancelable.value = false;
    }

    // 使用 hook 自定义函数
    const { saveSetting } = useReduceFn();
    // 保存设置/修改设置
    const saveContent = async () => {
      loading.value = true;
      await saveSetting(save);
      loading.value = false;
    };
    const save = async () => {
      let result = null;
      if (btnText.value == "修改信息") {
        // 发送请求, 保存第一页设置内容
        result = await UpdateUserInfo({
          age: age.value,
          password: password.value,
        });
      }
      if (result.status == 200) {
        notify("success", result.message);
        // 更新用户信息
        await Store.dispatch("user/INITUSERINFO", {
          username: username.value,
          _id: userid.value,
          password: password.value,
          age: age.value,
          sex: sex.value,
          token: localStorage.getItem("token"),
        });
      }
      loading.value = false;
    };

    return {
      cancelable,
      handleLogOut,
      cancleLogOut,
      btnText,
      username,
      password,
      avator,
      userid,
      sex,
      age,
      saveContent,
      loading,
    };
  },
});
</script>

<style lang="less" scoped>
.user-container {
  height: calc(100vh - 80px);
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );

  .hello-username {
    display: flex;
    justify-content: center;
    padding-top: 65px;
    h3 {
      font-size: 28px;
      color: #333;
    }
  }
  .title-icon {
    padding-right: 10px;
    width: 30px;
    height: 30px;
  }

  .user-box {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 60px;

    .user-article {
      width: 30vw;
      height: 370px;
      border-radius: 12px;
      .title {
        text-align: left;
        font-size: 22px;
        margin-bottom: 20px;
      }
      .item-tweet {
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 12px;
        display: flex;
        align-items: flex-start;
        margin: 15px 0;
        padding: 10px;
        box-shadow: 5px 5px 5px #eee;

        .avatar {
          margin-right: 15px;
          margin-left: 5px;
          margin-top: 8px;

          img {
            width: 30px;
            height: 30px;
            // border-radius: 50%;
          }
        }
        .content {
          flex: 1;

          .header {
            display: flex;
            align-items: center;
            margin-bottom: 5px;

            .username {
              font-weight: bold;
              margin-right: 6px;
              color: gray;
            }

            .date {
              color: gray;
            }
          }

          .text {
            font-size: 16px;
            text-align: left;
            margin-top: 10px;
          }
        }
      }
    }

    .line {
      height: 370px;
      width: 0.5px;
      background-color: #bbb;
      margin-left: 100px;
      margin-right: 100px;
    }

    :deep(.n-spin-content) {
      display: flex;
      align-items: center;
      .container {
        width: 30vw;
      }
    }

    :deep(.n-space) {
      margin-top: 10px;
      font-size: 16px;
      .n-input{
        margin-top: 10px;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, 0.7);
      }
      .n-button{
        margin-top: 20px;
      }
    }
  }

  .container {
    .title {
      margin-top: 5px;
      margin-bottom: 10px;
      text-align: left;
      font-size: 22px;
      margin-bottom: 20px;
    }
  }

  .bottom-nav-box {
    .logout-btn {
      position: fixed;
      right: 80px;
      bottom: 100px;
    }
  }
}
</style>
