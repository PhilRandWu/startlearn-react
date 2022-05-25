/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-24 19:09:45
 * @LastEditTime: 2022-05-25 11:04:22
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import './Modal.css'

export default function Modal(props) {
  if (!props.isLoading) {
    return;
  }
  return (
    <div className="modal">
      <p>加载中...</p>
    </div>
  )
}
