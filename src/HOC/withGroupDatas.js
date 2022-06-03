/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 20:21:09
 * @LastEditTime: 2022-06-03 20:23:10
 * @LastEditors: PhilRandWu
 */
import React, { Component } from 'react'
import type from '../utils/commonTypes'

export default function withGroupDatas(Comp) {
    return class groupDatas extends Component {

        static defaultProps = {
            arr: [],
        }

        static PropsTypes = {
            arr: type.arr
        }

        render() {
            const elements = this.props.arr.map(it => <Comp key={it.id} {...this.props} Info={it} />)
            return (
                <>
                    {elements}
                </>
            )
        }
    }
}
