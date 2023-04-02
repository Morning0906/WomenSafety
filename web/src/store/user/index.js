import {
    UserLogin
} from "@/api/user";
import {
    deleteUserToken
} from "@/utils/auth";
import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_INIT
} from "./mutation_types";

const mutations = {
    // 登录
    [USER_LOGIN]: (state, user) => {
    },
    // 登出
    [USER_LOGOUT]: (state) => {
        deleteUserToken();
        state.username = "";
        state.password = "";
        state.sex = "";
        state.age = "";
        state.userid = "";
        state.token = "";
    },
    // 用户信息初始化
    [USER_INIT]: (state, user) => {
        state.username = user.username;
        state.userid = user._id;
        state.password = user.password;
        state.sex = user.sex;
        state.age = user.age;
        state.token = user.token;
    },
};

const actions = {
    /* 
        @user: 接收一个用户信息的对象
    */
    INITUSERINFO: ({
        commit
    }, user) => {
        // 获取用户信息
        commit(USER_INIT, user);
    },
    LOGIN: async ({
        commit
    }, user) => {
        // 请求登录接口
        const result = await UserLogin(user);
        return result;
    },
    LOGOUT: ({
        commit
    }) => {
        commit(USER_LOGOUT);
    },
};

export default {
    namespaced: true,
    state() {
        return {
            userid: "",
            username: "",
            password: "",
            sex: "",
            avatar: "",
            token: "",
            age: "",
        }
    },
    mutations,
    actions,
};