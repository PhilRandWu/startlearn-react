/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-01 20:43:02
 * @LastEditTime: 2022-06-04 21:43:19
 * @LastEditors: PhilRandWu
 */
import React, { Component, forwardRef } from 'react'
// import CheckGroup from '../Form/CheckGroup'
import Pulldown from '../Form/Pulldown'
// import RadioCheckGroup from '../Form/RadioCheckGroup'

function Test(props, ref) {
    return (
        <h1 ref={ref}>{props.words}</h1>
    )
}

const NewTest = forwardRef(Test);

export default class App extends Component {

    // state = {
    //     name: 'checkbox',
    //     isChooseArr: [],
    //     arr: [
    //         { id: "1", value: 'football', txt: '足球' },
    //         { id: "2", value: 'run', txt: '跑步' },
    //         { id: "3", value: 'Tennis', txt: '网球' },
    //         { id: "4", value: 'Basketball', txt: '篮球' },
    //         { id: "5", value: 'other', txt: '其他' }
    //     ],

    // }
    // render() {
    //     return (
    //         <CheckGroup {...this.state} onChange={(newState) => {
    //             this.setState({
    //                 isChooseArr: newState
    //             })
    //         }}/>
    //     )
    // }


    // state = {
    //     name: 'radio',
    //     arr: [
    //         {
    //             id: 1, value: 'male', txt: '男'
    //         },
    //         {
    //             id: 2, value: 'female', txt: '女'
    //         }
    //     ],
    //     value: 'male'
    // }

    // render() {
    //     return (
    //         <RadioCheckGroup {...this.state} onChange={value => {
    //             this.setState({
    //                 value
    //             })
    //         }}/>
    //     )
    // }


    state = {
        name: 'select',
        arr: [
            {
                id: "1", value: 'beijing', txt: '北京'
            },
            {
                id: "2", value: 'shanghai', txt: '上海'
            },
            {
                id: "3", value: 'xian', txt: '西安'
            }
        ],
        value: '北京'
    }

    pullRef = React.createRef();
    funRef = React.createRef();

    componentDidMount() {
        console.log(this.pullRef,this.funRef)
    }

    render() {
        return (
            <>
            <Pulldown ref={this.pullRef} {...this.state} onChange={value => {
                this.setState({
                    value
                })
            }} />
            <NewTest ref={this.funRef} words="hehe" />
            </>
        )
    }
}
