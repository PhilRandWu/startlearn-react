/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 13:37:49
 * @LastEditTime: 2022-06-25 14:38:04
 * @LastEditors: PhilRandWu
 */
import React, { PureComponent, StrictMode } from 'react'
import Layout from './components/Layout/index'
import './router/index';
import MainRouter from './router/index';

export default class App extends PureComponent {
  render() {
    return (
      <StrictMode>
        <MainRouter>
          <Layout>
            主区域展示
          </Layout>
        </MainRouter>
      </StrictMode>
    )
  }
}
