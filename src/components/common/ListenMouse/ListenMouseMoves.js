/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-08 15:57:34
 * @LastEditTime: 2022-06-08 16:18:14
 * @LastEditors: PhilRandWu
 */
import React, { PureComponent } from 'react'
import './style.css'

export default class ListenMouseMoves extends PureComponent {

    state = {
        x: 0,
        y: 0
    }

    boxRef = React.createRef();


    handleMouseMove = e => {
        const { left, top } = this.boxRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        console.log(e.clientX,left)
        this.setState({
            x,
            y
        })
    }

    render() {
        return (
            <div
                ref={this.boxRef}
                className='blueBox'
                onMouseMove={this.handleMouseMove}
            >
                {this.props.render(this.state)}
            </div>
        )
    }
}
