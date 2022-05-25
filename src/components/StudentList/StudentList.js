/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-24 18:51:49
 * @LastEditTime: 2022-05-24 19:01:32
 * @LastEditors: PhilRandWu
 */
import React from 'react'

export default function StudentList(props) {
    const stus = props.stus.map((item,index) => <li key={index}>name: {item.name} age: {item.age} sex: {item.sex} birthday: {item.birthday}</li>)
    return (
        <ul>
            {stus}
        </ul>
    )
}
