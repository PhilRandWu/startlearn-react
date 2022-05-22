/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-22 18:12:14
 * @LastEditTime: 2022-05-22 19:28:27
 * @LastEditors: PhilRandWu
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const a = 2, b = 3;
const obj = {
  a: 1,
  b: 2
}
const arr = ['1', 2, 3, 4, 5];
const obj1 = <div>呵呵</div>
const imgSrc = 'https://img0.baidu.com/it/u=1900973516,3675630457&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500';
const dangerous = '危险的文本';
const span = (
  <>
    <span>我是一个<h1> span </h1></span>
    <div>hehe</div>
    <h1>{a} * {b} = {a * b}</h1>
    {/* 以下不会输出 */}
    {null}
    {undefined}
    {false}

    {/* 普通对象直接报错，但 React 元素对象可以输出 */}
    {/* { obj } */}
    {obj1}

    {/* 数组会每一个生成一个子元素 */}
    {arr}

    <img alt='' src={imgSrc} className={'border'} style={{
      marginLeft: 5,
      width: 200
    }}></img>
    <div dangerouslySetInnerHTML={{
      __html: dangerous
    }}></div>
  </>
);
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(span);
