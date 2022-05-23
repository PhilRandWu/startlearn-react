/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-23 10:38:32
 * @LastEditTime: 2022-05-23 10:48:05
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'

export default class Tick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num
        };
        this.timer = setInterval(() => {
            this.setState({
                num: this.state.num === 0 ? 0 : this.state.num - 1,
            });
            if (this.state.num === 0) {
                clearInterval(this.timer);
            }
        }, 1000)
    }
    render() {
        return (
            <span>倒计时： {this.state.num}</span>
        )
    }
}
