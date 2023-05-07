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

// 创建推文
export function createTweet(data) {
    return request({
        url: `createTweet`,
        method: "post",
        data,
    });
}

// 查询全部评论
export function queryCommentsByTweetId(data) {
    return request({
        url: `queryCommentsByTweetId`,
        method: "post",
        data,
    });
}

// 发布评论
export function createComments(data) {
    return request({
        url: `createComments`,
        method: "post",
        data,
    });
}

// 请求建议
export function findAdviseById(data) {
    return request({
        url: `findAdviseById`,
        method: "post",
        data,
    });
}
