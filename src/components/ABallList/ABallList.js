/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-23 20:53:31
 * @LastEditTime: 2022-05-23 20:59:23
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import { getRandom } from '../../utils/random';
import ABall from '../ABall/ABall';

export default class ABallList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballList: []
        }
        this.timer = setInterval(() => {
            const Info = {
                left: getRandom(100, document.documentElement.clientWidth - 100),
                top: getRandom(100, document.documentElement.clientHeight - 100),
                speedX: getRandom(50, 150),
                speedY: getRandom(100, 200),
                bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`,
                duration: getRandom(5, 12)
            }
            this.setState({
                ballList: [...this.state.ballList, Info]
            })
            if(this.state.ballList.length === 10) {
                clearInterval(this.timer);
            }
        },1000)
    }

    render() {

        const balls = this.state.ballList.map(item => <ABall {...item} />);
        return (
            <>
                {balls}
            </>
        )
    }
}
