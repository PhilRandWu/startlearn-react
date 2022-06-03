
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
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
}

export default type;
