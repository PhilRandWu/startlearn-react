/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-23 09:45:43
 * @LastEditTime: 2022-05-23 10:00:38
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import { Student } from './Student'

export class StudentList extends Component {
    render() {
        console.log(this.props);
        const students = this.props.stus.map(item => <Student {...item} />);
        return <ul>
            {students}
        </ul>
    }
}

