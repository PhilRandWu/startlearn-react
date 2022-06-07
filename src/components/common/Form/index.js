/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-07 18:18:10
 * @LastEditTime: 2022-06-07 18:58:47
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import FormButton from './FormButton'
import { ctx } from './formContext'
import FormInput from './FormInput'
import PropTypes from 'prop-types'

export default class Form extends Component {

    static propTypes = {
        onSubmit: PropTypes.func
    }

    state = {
        FormData: {}, // 数据对象
        changeFormData: (name, value) => {
            this.setState({
                FormData: {
                    ...this.state.FormData,
                    [name]: value
                }
            })
        },
        onSubmit: (data) => {
            this.props.onSubmit && this.props.onSubmit(data);
        }
    }


    render() {
        return (
            <ctx.Provider value={this.state}>
                {this.props.children}
            </ctx.Provider>
        )
    }
}

Form.input = FormInput;
Form.button = FormButton;
