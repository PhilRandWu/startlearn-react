/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 19:51:23
 * @LastEditTime: 2022-06-25 19:56:32
 * @LastEditors: PhilRandWu
 */

import { message } from 'antd';

export function delay(duration = 1000) {
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            reslove();
        },duration)
    })
}

export async function showMessage({ type, msg, duration }) {
    await delay(duration);
    message[type](msg);
}
