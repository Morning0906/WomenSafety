import { request } from "@/utils/request";

// 查询建议
export function queryAdvise(data) {
    return request({
        url: `queryAdvise`,
        method: "get",
        data,
    });
}

// 查询新闻
export function queryNews(data) {
    return request({
        url: `queryNews`,
        method: "get",
        data,
    });
}

// 查询商品
export function queryCommodities(data) {
    return request({
        url: `queryCommodities`,
        method: "get",
        data,
    });
}

// 查询帖子列表
export function queryTweets(data) {
    return request({
        url: `queryTweets`,
        method: "get",
        data,
    });
}
