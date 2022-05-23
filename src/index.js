/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-22 18:12:14
 * @LastEditTime: 2022-05-23 08:48:05
 * @LastEditors: PhilRandWu
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import dog1 from './assest/dog.webp';
import dog2 from './assest/dog2.webp';
import dog3 from './assest/dog3.webp';

let index = 0;
let timer = null;
const srcArr = [dog1, dog2, dog3];
const rootDom = document.getElementById('app')
const root = ReactDOM.createRoot(rootDom);

function render() {
  root.render(<img alt='' src={srcArr[index]}></img>)
}


function start() {
  clearInterval(timer);
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 2000);
}

function stop() {
  clearInterval(timer);
}


render();
start();

rootDom.onmouseenter = function () {
  stop();
}
rootDom.onmouseleave = function () {
  start();
}
