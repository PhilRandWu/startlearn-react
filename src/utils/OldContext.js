/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-07 07:48:41
 * @LastEditTime: 2022-06-07 08:26:07
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import PropsTypes from 'prop-types';

function ChildA(props, context) {
    return (
        <>
            <div>childA</div>
            <div>{context.name}</div>
            <div>{context.age}</div>
            <button onClick={() => {
                context.onChange(context.age + 1)
            }}>子组件增加年龄</button>
        </>
    )
}

ChildA.contextTypes = {
    name: PropsTypes.string,
    age: PropsTypes.number,
    onChange: PropsTypes.func
}




export class Child extends Component {
    static contextTypes = {
        name: PropsTypes.string,
        age: PropsTypes.number,
        onChange: PropsTypes.func
    }

    render() {
        return (
            <>
                <div>childB</div>
                <div>{this.context.name}</div>
                <div>{this.context.age}</div>
                <button onClick={() => {
                    this.context.onChange(this.context.age + 1)
                }}>子组件增加年龄</button>
            </>
        )
    }
}





export default class OldContext extends Component {
    // childContextTypes
    static childContextTypes = {
        name: PropsTypes.string,
        age: PropsTypes.number,
        onChange: PropsTypes.func
    }

    getChildContext() {
        return {
            name: this.state.name,
            age: this.state.age,
            onChange: (newState) => {
                this.setState({
                    age: newState
                })
            }
        }
    }

    state = {
        name: '小米',
        age: 12
    }

    render() {
        return (
            <>
                <ChildA />
                <Child />
                <button onClick={() => {
                    this.setState({
                        age: this.state.age + 1
                    })
                }}>父组件增加年龄</button>
            </>
        )
    }
}
