/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 10:08:16
 * @LastEditTime: 2022-06-03 20:24:33
 * @LastEditors: PhilRandWu
 */

import React, { Component } from 'react'
import withGroupDatas from '../../HOC/withGroupDatas'
import type from '../../utils/commonTypes'
// props： {
//     name,
//         isChooseArr,
//         arr: [
//             { id: 1, value: 'football',txt: '足球'}
//         ],
// }
class SingleCheck extends Component {

    static defaultProps = {
        name: 'checkbox',
        Info: {},
        isChooseArr: [],
    }

    static propTypes = {
        name: type.name,
        Info: type.singArr.isRequired,
        isChooseArr: type.isChooseArr.isRequired,
        onChange: type.onChange
    }


    handleChange = e => {
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
        return (
            <label>
                <input
                    name={this.props.name}
                    type="checkbox"
                    value={this.props.Info.value}
                    checked={this.props.isChooseArr.includes(this.props.Info.value)}
                    onChange={this.handleChange}
                />{this.props.Info.txt}
            </label>
        )
    }
}


export default withGroupDatas(SingleCheck)

