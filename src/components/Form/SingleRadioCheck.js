/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 11:09:49
 * @LastEditTime: 2022-06-03 20:29:16
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import withGroupDatas from '../../HOC/withGroupDatas'
import type from '../../utils/commonTypes'

class SingleRadioCheck extends Component {

    static defaultProps = {
        name: 'radio',
        value: 'male',
        Info: [],
    }

    static propsTypes = {
        name: type.name,
        value: type.value.isRequired,
        Info: type.singArr
    }

    handleChange = e => {
        let value = e.target.value;
        this.props.onChange && this.props.onChange(value);
    }
    render() {
        return (
            <label>
                <input
                    name={this.props.Info.name}
                    value={this.props.Info.value}
                    type="radio"
                    checked={this.props.Info.value === this.props.value}
                    onChange={this.handleChange}
                />{this.props.Info.txt}
            </label>
        )
    }
}

export default withGroupDatas(SingleRadioCheck);
