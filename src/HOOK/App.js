/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-09 15:02:19
 * @LastEditTime: 2022-06-09 15:25:48
 * @LastEditors: PhilRandWu
 */
import React, { useState } from 'react'

export default function App() {
    const [num, setNum] = useState(0);
    const [visible, setvisible] = useState(false);
    const area = visible ? <div>
        <button onClick={() => {
            setNum(num + 1)
        }}>+</button>
        <span>{num}</span>
        <button onClick={() => {
            setNum(num - 1)
        }}>-</button>
    </div> : null;
    return (
        <>
            {area}
            <button onClick={() => {
                setvisible(!visible)
            }}>显示/隐藏</button>
        </>
    )
}
