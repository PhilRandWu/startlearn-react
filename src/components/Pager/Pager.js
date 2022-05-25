/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-23 21:59:51
 * @LastEditTime: 2022-05-23 22:45:33
 * @LastEditors: PhilRandWu
 */
import React from 'react'
import './Pager.css';

export default function Pager(props) {
    // current
    // total
    // limit

    // onPageChange
    if (props.total === 0) {
        return;
    }
    const allPagerNumber = getPager(props);
    const min = getMinNumber(props);
    const max = getMaxNumber(allPagerNumber, props, min);
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(<span key={i} onClick={() => { toPage(i, props) }} className={props.current === i ? 'item active' : 'item'}>{i}</span>)
    }
    return (
        <>
            <span onClick={() => { toPage(1, props) }} className={props.current === 1 ? 'item disabled' : 'item'}>首页</span>
            <span onClick={() => { toPage(props.current <= 1 ? 1 : props.current - 1, props) }} className={props.current === 1 ? 'item disabled' : 'item'}>上一页</span>

            {/* 数字分页 */}
            {numbers}

            <span onClick={() => { toPage(props.current >= allPagerNumber ? allPagerNumber : props.current + 1, props) }} className={props.current === allPagerNumber ? 'item disabled' : 'item'}>下一页</span>
            <span onClick={() => { toPage(allPagerNumber, props) }} className={props.current === allPagerNumber ? 'item disabled' : 'item'}>尾页</span>

            <span className='dis'>{props.current}</span>
            /
            <span className='dis'>{allPagerNumber}</span>
        </>
    )
}


function getPager({ total, limit }) {
    return Math.ceil(total / limit);
}


function toPage(target, props) {
    if (props.current === target) {
        return;
    }
    props.onPageChange && props.onPageChange(target);
}

function getMinNumber({ limitPage, current }) {
    let min = current - Math.floor(limitPage / 2);
    if (min < 1) {
        min = 1
    }
    return min;
}

function getMaxNumber(allPagerNumber, { limitPage }, min) {
    let max = min + limitPage - 1;
    if (max >= allPagerNumber) {
        max = allPagerNumber;
    }
    return max;
}
