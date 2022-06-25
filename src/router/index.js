/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 14:09:59
 * @LastEditTime: 2022-06-25 15:42:02
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin';
import Login from '../pages/Login/index';

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/admin/*" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}
