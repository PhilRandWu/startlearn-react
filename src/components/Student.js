/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-23 09:37:55
 * @LastEditTime: 2022-05-23 10:01:34
 * @LastEditors: PhilRandWu
 */
import React from 'react'

export const Student = (props) => {
    return (
        <li>
            <span>name: {props.name}</span>
            <span>age: {props.age}</span>
            <span>sex: {props.sex}</span>
            <span>birthday: {props.birthday}</span>
        </li>
    )
}
