/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 11:09:49
 * @LastEditTime: 2022-06-03 17:11:57
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import type from '../../utils/commonTypes'

export default class RadioCheckGroup extends Component {

    static defaultProps = {
        name: 'radio',
        value: 'male',
        arr: []
    }

    static propsTypes = {
        name: type.name,
        value: type.value.isRequired,
        arr: type.arr.isRequired
    }

    getRadioElements = () => {
        return this.props.arr.map(item => (
            <label key={item.id}>
                <input 
                name={this.props.name}
                value={item.value}
                type="radio"
                checked={item.value === this.props.value}
                onChange={this.handleChange}
                />{item.txt}
            </label>
        ))
    }

    handleChange = e => {
        let value = e.target.value;
        this.props.onChange && this.props.onChange(value);
    }
    render() {
        const radioElements = this.getRadioElements();
        return (
            <div>
                {radioElements}
            </div>
        )
    }
}
