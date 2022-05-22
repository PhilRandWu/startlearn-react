/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-22 18:12:14
 * @LastEditTime: 2022-05-22 18:32:48
 * @LastEditors: PhilRandWu
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

const span = <span>我是一个<h1> span </h1></span>;
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(span);
