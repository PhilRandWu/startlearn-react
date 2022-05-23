/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-23 20:07:01
 * @LastEditTime: 2022-05-23 20:41:36
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import './ABall.css';

export default class ABall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            speedX: props.speedX || 10,
            speedY: props.speedY || 10,
        }

        this.timer = setInterval(() => {
            let disX = this.state.speedX * props.duration / 1000;
            let disY = this.state.speedY * props.duration / 1000;
            let newLeft = this.state.left + disX;
            let newTop = this.state.top + disY;
            if(newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    speedX: -this.state.speedX,
                })
            } else if(newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    speedX: -this.state.speedX
                })
            }
            if(newTop <= 0) {
                newTop = 0;
                this.setState({
                    speedY: -this.state.speedY,
                })
            } else if(newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    speedY: -this.state.speedY
                })
            }
            this.setState({
                left: newLeft,
                top: newTop,
            })
        },props.duration)
    }
    render() {
        return (
            <div className='ABall' style={{
                left: this.state.left || 0,
                top: this.state.top || 0,
                backgroundColor: this.props.bg || '#f40',
            }}></div>
        )
    }
}
