/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 14:57:29
 * @LastEditTime: 2022-06-25 15:42:33
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Menu() {
  return (
    <ul className='Menu'>
        <li><Link to="student">学生列表</Link></li>
        <li><Link to="student/add">添加学生</Link></li>
        <li><Link to="class">课程列表</Link></li>
        <li><Link to="class/add">添加课程</Link></li>
    </ul>
  )
}
