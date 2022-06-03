/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 10:08:16
 * @LastEditTime: 2022-06-03 11:05:53
 * @LastEditors: PhilRandWu
 */

import React, { Component } from 'react'

// props： {
//     name,
//         isChooseArr,
//         arr: [
//             { id: 1, value: 'football',txt: '足球'}
//         ],
// }
export default class checkGroup extends Component {
    getCheckGroup = props => {
        return props.arr.map(item => (
            <label key={item.id}>
                <input
                    name={props.name}
                    type="checkbox"
                    value={item.value}
                    checked={props.isChooseArr.includes(item.value)}
                    onChange={this.handleChange}
                />{item.txt}
            </label>
        ))
    }
    handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;
        if (e.target.checked) {
            value = [
                ...this.props.isChooseArr,
                value
            ]
        } else {
            value = this.props.isChooseArr.filter(item => item !== value)
        }
        this.props.onChange && this.props.onChange(value)
    }

    render() {
        const elements = this.getCheckGroup(this.props);
        return (
            <div>
                {elements}
            </div>
        )
    }
}




