/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 19:20:23
 * @LastEditTime: 2022-06-03 19:20:23
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'

export default function withLogin(Comp) {
  return class loginWrapper extends Component {
      render() {
          return (
              <Comp {...this.props} />
          )
      }
  }
}
