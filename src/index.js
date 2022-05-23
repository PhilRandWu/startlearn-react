/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-22 18:12:14
 * @LastEditTime: 2022-05-23 09:59:47
 * @LastEditors: PhilRandWu
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { StudentList } from './components/StudentList';
async function fetchData(url) {
  const data = await fetch(url).then(resp => resp.json()).then(resp => resp.data);
  return data;
}

async function render() {
  const stus = await fetchData('https://console-mock.apipost.cn/app/mock/project/09d61def-199c-4270-829d-f599bcb0591b/app/mock/project/09d61def-199c-4270-829d-f599bcb0591b/app/mock/project/09d61def-199c-4270-829d-f599bcb0591b/app/mock/project/09d61def-199c-4270-829d-f599bcb0591b/app/mock/project/09d61def-199c-4270-829d-f599bcb0591b/');
  root.render(<StudentList stus={stus} />)
}

render();
const root = ReactDOM.createRoot(document.getElementById('app'));
