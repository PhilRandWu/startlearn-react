/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-23 20:50:14
 * @LastEditTime: 2022-05-23 20:50:14
 * @LastEditors: PhilRandWu
 */
export function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
