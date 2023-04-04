import { request } from "@/utils/request";

export function queryAdvise(data) {
    return request({
        url: `queryAdvise`,
        method: "get",
        data,
    });
}

