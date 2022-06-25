/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 14:12:46
 * @LastEditTime: 2022-06-25 14:45:13
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import './index.css'

export default function Login() {
  return (
    <div className='login'>
        <label>账号:
            <input />
        </label>
        <label>密码:
            <input />
        </label>
        <button>登录</button>
    </div>
  )
}
