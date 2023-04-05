<template>
  <div class="user-container">
    <div class="top-nav-box">
      <div class="advice-box-title">个人中心</div>
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

    <!-- 你好, username -->
    <div class="hello-username">
      <h3>Hello, {{ username }}</h3>
    </div>

    <div class="user-box">
      <!-- 用户文章 -->
      <div class="user-article">
        <div class="item-tweet">
          <div class="avatar">
            <img
              src="https://img0.baidu.com/it/u=1482619835,4153008160&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1680800400&t=3f1a20cb32da7b18c46d216694b23f86"
              alt="User avatar"
            />
          </div>
          <div class="content">
            <div class="header">
              <span class="username">leo</span>
              <span class="date">2023-04-04</span>
            </div>
            <div class="text">道路很远, 我们很近, 相信明天, 是美好的.</div>
            <div class="operation">
              <div class="stars">
                <img src="@/assets/like.png" />
                <div class="star_num">12</div>
              </div>
              <div class="comments">
                <img src="@/assets/comment.png" />
                <div class="comment_num">3</div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-tweet">
          <div class="avatar">
            <img
              src="https://img0.baidu.com/it/u=1482619835,4153008160&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1680800400&t=3f1a20cb32da7b18c46d216694b23f86"
              alt="User avatar"
            />
          </div>
          <div class="content">
            <div class="header">
              <span class="username">leo</span>
              <span class="date">2023-04-03</span>
            </div>
            <div class="text">如果你不是一个很善于交际的人，那就一个人吃饭，一个人散步一个人看电影，你会发现，其实一个人比一群人更好过.</div>
            <div class="operation">
              <div class="stars">
                <img src="@/assets/like.png" />
                <div class="star_num">89</div>
              </div>
              <div class="comments">
                <img src="@/assets/comment.png" />
                <div class="comment_num">47</div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-tweet">
          <div class="avatar">
            <img
              src="https://img0.baidu.com/it/u=1482619835,4153008160&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1680800400&t=3f1a20cb32da7b18c46d216694b23f86"
              alt="User avatar"
            />
          </div>
          <div class="content">
            <div class="header">
              <span class="username">leo</span>
              <span class="date">2023-03-04</span>
            </div>
            <div class="text">没有谁能一直保持着孤傲，碰多了钉子自然磨掉棱角，这叫做成长！</div>
            <div class="operation">
              <div class="stars">
                <img src="@/assets/like.png" />
                <div class="star_num">65</div>
              </div>
              <div class="comments">
                <img src="@/assets/comment.png" />
                <div class="comment_num">13</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 竖线分割 -->
      <div class="line"></div>
      <!-- 用户信息 -->
      <n-spin size="large" :show="loading">
        <div class="container">
          <!-- 用户信息 -->
          <n-space vertical :size="distance">
            <n-space align="center">
              id值:
              <n-input
                v-model:value="userid"
                type="text"
                size="large"
                placeholder="请输入.."
                readonly
              />
            </n-space>
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
                type="text"
                size="large"
                placeholder="请输入.."
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
  </div>
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

export default defineComponent({
  name: "User",
  components: {
    NInput,
    NSpace,
    NDivider,
    NButton,
    NSpin,
    NPopover,
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
  height: 100vh;
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  );

  .top-nav-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .advice-box-title {
      font-size: 28px;
      font-weight: 600;
      color: #444;
      text-align: left;
      padding-left: 60px;
      padding-top: 50px;
    }

    .logout-btn {
      padding-right: 60px;
      padding-top: 50px;
    }
  }

  .hello-username {
    margin-top: 65px;
    h3 {
      font-size: 24px;
      color: #333;
    }
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
      // background-color: #fff;
      // box-shadow: 5px 5px 5px #eee;
      .item-tweet {
        background-color: #fff;
        border-radius: 12px;
        display: flex;
        align-items: flex-start;
        margin: 10px 0;
        padding: 10px;
        box-shadow: 5px 5px 5px #eee;

        .avatar {
          margin-right: 10px;
          margin-left: 5px;

          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
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
            text-align: left;
            margin-top: 5px;
          }

          .operation {
            display: flex;
            align-items: center;
            margin-top: 5px;
            .stars {
              display: flex;
              align-items: center;
              margin-right: 20px;
              img {
                width: 15px;
                height: 15px;
                margin-right: 5px;
              }
            }
            .comments {
              display: flex;
              align-items: center;
              img {
                width: 15px;
                height: 15px;
                margin-right: 5px;
              }
            }
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
  }
}
</style>
