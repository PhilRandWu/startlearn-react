/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-25 16:30:37
 * @LastEditTime: 2022-06-25 16:43:31
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Input, Radio, Tooltip, Button } from 'antd';
import './index.css'

export default function SearchBox() {
    return (
        <div className='searchBox'>
            关键字: <Input className='keywords' placeholder="Basic usage"/>
            性别: <Radio.Group name="radiogroup" defaultValue={-1}>
                <Radio value={-1}>不限</Radio>
                <Radio value={1}>男</Radio>
                <Radio value={0}>女</Radio>
            </Radio.Group>
            <Tooltip title="search">
                <Button type="primary" size='small' shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
        </div>
    )
}

