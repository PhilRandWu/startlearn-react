/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-07 18:23:52
 * @LastEditTime: 2022-06-07 18:48:05
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ctx } from './formContext'

export default class FormInput extends Component {

    static defaultProps = {
        type: 'text'
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }

    static contextType = ctx;



    render() {
        return (
            <input
                name={this.props.name}
                type={this.props.type}
                value={this.context.FormData[this.props.name] || ""}
                onChange={(e) => {
                    this.context.changeFormData(this.props.name, e.target.value);
                }}
            />
        )
    }
}
