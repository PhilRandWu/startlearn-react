/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-24 19:09:45
 * @LastEditTime: 2022-05-25 19:12:35
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import './Modal.css'

export default function Modal(props) {
  const  defaultProps = {
    bg: 'rgba(0,0,0,.5)',
  }
  const mergeProps = {
    ...defaultProps,
    ...props
  }
  return (
    <div className="modal" style={{
      backgroundColor: mergeProps.bg,
    }}>
      <div className="center">
        {props.children}
      </div>
    </div>
  )
}
