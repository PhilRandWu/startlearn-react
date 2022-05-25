/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-25 18:47:53
 * @LastEditTime: 2022-05-25 19:12:51
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import Modal from '../Modal/Modal'

export default class App extends Component {
    state = {
        bg: 'rgba(1,1,1,.1)',
        isLoading: true
    }
    render() {
        return (
            <>
                <img alt='' src='https://img0.baidu.com/it/u=1858651154,4144960213&fm=253&fmt=auto&app=120&f=JPEG?w=1340&h=800'></img>
                {
                    this.state.isLoading ? (
                        <Modal {...this.state}>加载中...
                            <button onClick={() => {
                                this.setState({
                                    isLoading: false
                                })
                            }}>关闭蒙层</button>
                        </Modal>
                    ) : null
                }
                <button onClick={() => {
                    this.setState({
                        isLoading: true
                    })
                }}>展示蒙层</button> 
            </>
        )
    }
}
