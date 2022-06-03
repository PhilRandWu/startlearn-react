/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 14:56:37
 * @LastEditTime: 2022-06-03 17:15:24
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import type from '../../utils/commonTypes'

export default class Pulldown extends Component {

    static defaultProps = {
        name: 'select',
        value: '',
        arr: []
    }

    static propTypes = {
        name: type.name,
        value: type.value.isRequired,
        arr: type.arr.isRequired
    }

    getSelectElements = () => {
        return this.props.arr.map(item => (
            <option
                key={item.id}
                value={item.value}
                checked={item.value === this.props.value}
            >{item.txt}</option>
        ))
    }

    handleChange = e => {
        let value = e.target.value;
        this.props.onChange && this.props.onChange(value);
    }

    render() {
        const selectElements = this.getSelectElements();
        return (
            <select value={this.props.value} onChange={this.handleChange}>
                {selectElements}
            </select>
        )
    }
}
