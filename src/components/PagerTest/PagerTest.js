/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-25 10:51:49
 * @LastEditTime: 2022-05-25 11:05:44
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react';
import StudentList from '../StudentList/StudentList';
import Pager from '../Pager/Pager';
import Modal from '../Modal/Modal';


export default class PageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            total: NaN,
            limit: 10,
            limitPage: 5,
            isLoading: false,
            students: [],
            onPageChange: (target) => {
                this.current = target;
            }
        }
        this.fetchData();
    }
    handleClick = (target) => {
        this.setState({
            current: target
        })
        this.fetchData();
    }

    async fetchData() {
        this.setState({
            isLoading: true
        })
        const result = await fetch(`https://console-mock.apipost.cn/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/app/mock/project/c9849051-c80d-4bf0-9a7c-6c1a4b7ea4d4/?page=${this.state.current}`).then(resp => resp.json()).then(resp => resp.data);
        this.setState({
            total: result.length,
            students: result,
            isLoading: false
        })
    }
    render() {
        return (
            <>
                <StudentList stus={this.state.students} />
                <Pager {...this.state} onPageChange={this.handleClick} />
                <Modal isLoading={this.state.isLoading} />
            </>
        )
    }
}
