/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 19:10:54
 * @LastEditTime: 2022-06-03 19:21:20
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'

export default function withLog(Comp) {
  return class LogWrapper extends Component {
    componentDidMount() {
        console.log(`${Comp.name} 在${new Date()}被创建了`)
    }

    componentWillUnmount() {
        console.log(`${Comp.name} 在${new Date()}被销毁了`)
     }
    
    render() {
        if(this.props.isLogin) {
            return (
                <Comp {...this.props}/>
            )
        }
    }
  }
}
