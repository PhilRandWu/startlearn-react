/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-25 19:15:31
 * @LastEditTime: 2022-05-25 19:22:07
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import './Layout.css';

export default function Layout(props) {
    const defaultProps = {
        leftWidth: 50,
        rightWidth: 50
    }
    const mergeProps = {
        ...defaultProps,
        ...props
    }
    return (
        <div className='Layout'>
            <div className='main'>{props.children}</div>
            <div className='aside-left' style={{
                width: mergeProps.leftWidth
            }}>{props.leftContent}</div>
            <div className='aside-right' style={{
                width: mergeProps.rightWidth
            }}>{props.rightContent}</div>
        </div>
    )
}
