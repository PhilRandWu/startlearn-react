/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 19:45:40
 * @LastEditTime: 2022-06-25 19:56:36
 * @LastEditors: PhilRandWu
 */
import request from '../request';

export async function getStudents () {
    return await request.get('/api/student/findAll');
}
