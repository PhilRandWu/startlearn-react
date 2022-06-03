/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 14:56:37
 * @LastEditTime: 2022-06-03 20:44:08
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import withGroupDatas from '../../HOC/withGroupDatas'
import type from '../../utils/commonTypes'


class Options extends Component {
    static defaultProps = {
        Info: {}
    }

    static propTypes = {
        Info: type.singArr.isRequired
    }

    render() {
        return (
            <option
                value={this.props.Info.value}
                checked={this.props.Info.value === this.props.value}
            >{this.props.Info.txt}</option>
        )
    }
}


const GroupOptions = withGroupDatas(Options);


export default class Pulldown extends Component {

    static propTypes = {
        name: type.name,
        value: type.value,
        onChange: type.onChange
    }

    handleChange = e => {
        let value = e.target.value;
        this.props.onChange && this.props.onChange(value);
    }

    render() {
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
                <GroupOptions {...this.props} />
            </select>
        )
    }
}
