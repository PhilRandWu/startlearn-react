/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 13:44:23
 * @LastEditTime: 2022-06-25 14:16:22
 * @LastEditors: PhilRandWu
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './index.css';

export default class Layout extends PureComponent {

    static propTypes = {
        header: PropTypes.element,
        aside: PropTypes.element,
        children: PropTypes.node
    }

    render() {
        return (
            <div className='container'>
                <header>
                    {this.props.header}
                </header>
                <div className='middle'>
                    <div className='aside'>
                        {this.props.aside}
                    </div>
                    <div className='main'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
