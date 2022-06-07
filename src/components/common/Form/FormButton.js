/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-07 18:49:03
 * @LastEditTime: 2022-06-07 18:59:18
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import { ctx } from './formContext'

export default function FormButton(props) {
    return (
        <ctx.Consumer>
            {value => (
                <button onClick={() => {
                    value.onSubmit && value.onSubmit(value.FormData);
                }}>
                    {props.children}
                </button>
            )}
        </ctx.Consumer>
    )
}

