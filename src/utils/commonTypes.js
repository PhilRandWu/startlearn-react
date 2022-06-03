/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-03 20:12:39
 * @LastEditTime: 2022-06-03 20:12:39
 * @LastEditors: PhilRandWu
 */

import PropTypes from 'prop-types'

const type = {
    name: PropTypes.string,
    isChooseArr: PropTypes.arrayOf(PropTypes.string),
    arr: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        txt: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    })),
    singArr: PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        txt: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    }),
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
}

export default type;
