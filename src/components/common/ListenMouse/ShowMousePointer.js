/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-08 15:58:19
 * @LastEditTime: 2022-06-08 16:29:27
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import withListenMouseMoves from './withListenMouseMoves'
import './style.css'


function ShowMousePointer(props) {
    return (
        <div className='pointer' style={{
            left: props.mouse.x - 25,
            top: props.mouse.y -25
        }}></div>
    )
}


export default withListenMouseMoves(ShowMousePointer);
