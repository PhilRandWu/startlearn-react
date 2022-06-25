/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 14:48:06
 * @LastEditTime: 2022-06-25 14:54:56
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import './index.css'

export default function Header() {
  return (
    <>
    <div className='title'>学生管理系统</div>
    <div className='content'>
        <span>用户名</span>
        <button>退出</button>
    </div>
    </>
  )
}
