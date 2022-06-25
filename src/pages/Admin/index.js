/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 14:13:00
 * @LastEditTime: 2022-06-25 15:41:48
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import { Route,Routes } from 'react-router'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Menu from '../../components/Menu'

import Welcome from '../../components/Welcome'
import Student from '../../components/Student'
import AddStudent from '../../components/AddStudent'
import Class from '../../components/Class'
import AddClass from '../../components/AddClass'

export default function Admin() {
    return (
        <Layout
            header={<Header />}
            aside={<Menu />}
        >
            <Routes>
                <Route path="/" exact element={<Welcome />} />
                <Route path='student' exact element={<Student />} />
                <Route path='student/add' exact element={<AddStudent />} />
                <Route path='/class' exact element={<Class />} />
                <Route path='/class/add' exact element={<AddClass />} />
            </Routes>
        </Layout>
    )
}
