/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-01 20:43:02
 * @LastEditTime: 2022-06-03 11:02:25
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import CheckGroup from '../Form/CheckGroup'

export default class App extends Component {

    state = {
        name: 'checkbox',
        isChooseArr: [],
        arr: [
            { id: 1, value: 'football', txt: '足球' },
            { id: 2, value: 'run', txt: '跑步' },
            { id: 3, value: 'Tennis', txt: '网球' },
            { id: 4, value: 'Basketball', txt: '篮球' },
            { id: 5, value: 'other', txt: '其他' }
        ],
        
    }
    render() {
        return (
            <CheckGroup {...this.state} onChange={(newState) => {
                console.log(newState)
                this.setState({
                    isChooseArr: newState
                })
            }}/>
        )
    }
}
