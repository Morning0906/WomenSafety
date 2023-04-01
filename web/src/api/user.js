import { request } from "@/utils/request";

/**
 * 登陆
 * @param {*} data
 * @returns
 */
export function UserLogin(data) {
    return request({
        url: `loginUser`,
        method: "post",
        data,
    });
}

/**
 * 注册
 * @param {*} data
 * @returns
 */
 export function UserRegister(data) {
    return request({
        url: `registerUser`,
        method: "post",
        data,
    });
}

/**
 * 验证用户登录状态
 * @param {*} data
 * @returns
 */
 export function CheckStatus() {
    return request({
        url: `checkStatus`,
        method: "get",
    });
}

/**
 * 修改用户信息
 * @returns
 */
export function UpdateUserInfo(data) {
    return request({
        url: `updUserInfo`,
        method: "post",
        data
    });
}



