/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-07 08:29:18
 * @LastEditTime: 2022-06-07 09:18:53
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'

// 创建上下文及其默认值
const ctx = React.createContext({
    name: '小河',
    age: 12
})


function ChildA(props) {
    return (
        <ctx.Consumer>
            {(value) => (
                <>
                    <div>childA</div>
                    <div>{value.name}</div>
                    <div>{value.age}</div>
                    <button onClick={() => {
                        value.onChange(value.age + 1)
                    }}>子组件+1</button>
                </>
            )}
        </ctx.Consumer>
    )
}


class ChildB extends Component {

    static contextType = ctx;

    render() {
        console.log('render')
        return (
            <>
                <div>childB</div>
                <div>{this.context.name}</div>
                <div>{this.context.age}</div>
                <button onClick={() => {
                    this.context.onChange(this.context.age + 1)
                }}>子组件+1</button>
            </>
        )
    }
}


export default class NewContext extends Component {

    datas = [
        {
            name: '晓丽',
            age: 11,
            onChange: (newState) => {
                this.setState({
                    age: newState
                })
            }
        }
    ]

    state = this.datas[0];

    shouldComponentUpdate() {
        console.log("优化了");
        return false;
    }

    render() {
        console.log('render')
        return (
            <ctx.Provider value={this.state}>
                <div>
                    <ChildA />
                    <ChildB />
                    <button onClick={() => {
                        this.setState({
                            age: this.state.age + 1
                        }, () => {
                                this.datas.push(this.state);
                                console.log(this.datas[0] === this.datas[1])
                        })
                    }}>父组件加1</button>
                </div>
            </ctx.Provider>
        )
    }
}
