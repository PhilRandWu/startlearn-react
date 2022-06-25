/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 17:00:44
 * @LastEditTime: 2022-06-25 20:58:33
 * @LastEditors: PhilRandWu
 */
import axios from "axios";
import { showMessage } from "../utils/showMessage"

const ins = axios.create({
    params: {
        appkey: 'PhilRandWu_1622380683185'
    }
});
 // 创建一个axios的实例
ins.interceptors.request.use(function(config) {
    return config;
})


ins.interceptors.response.use(function (resp) {
    if(resp.data.status !== 'success') {
        showMessage({
            type: "error",
            content: resp.data.msg,
            duration: 1500,
        })
        return null;
    }
    return resp.data.data;
})
export default ins;
