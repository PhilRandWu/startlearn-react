/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-04 20:57:27
 * @LastEditTime: 2022-06-04 21:38:05
 * @LastEditors: PhilRandWu
 */
import React, { Component, forwardRef } from 'react'

export default function withLog(Comp) {
    class LogWrapper extends Component {
        render() {
            const { forwardRef } = this.props;
            return (
                <Comp {...this.props} ref={forwardRef} />
            )
        }
    }

    return forwardRef((props, ref) => (
        <LogWrapper {...props} forwardRef={ref} />
    ))
}
