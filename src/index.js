/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-22 18:12:14
 * @LastEditTime: 2022-05-23 10:44:47
 * @LastEditors: PhilRandWu
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

import Tick from './components/Tick';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<Tick num={10}/>)
