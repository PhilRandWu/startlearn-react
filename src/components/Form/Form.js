import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        loginId: '',
        loginPsw: '',
        sex: 'male',
        city: '北京',
        chooseLoves: [],
        loves: [
            {
                value: 'football', txt: '足球',
            },
            {
                value: 'Basketball', txt: '篮球',
            },
            {
                value: 'Tennis', txt: '网球',
            },
            {
                value: 'Run', txt: '跑步',
            },
            {
                value: 'other', txt: '其他',
            }
        ]
    }

    handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                value = [
                    ...this.state.chooseLoves,
                    value
                ]
            } else {
                value = this.state.chooseLoves.filter(item => item !== value)
            }
        }
        this.setState({
            [name]: value,
        })
    }

    render() {
        const lovesElements = this.state.loves.map(item => (
            <label key={item.value} >
                <input
                    name="chooseLoves"
                    type="checkbox"
                    onChange={this.handleChange}
                    value={item.value}
                    checked={this.state.chooseLoves.includes(item.value)} />
                {item.txt}
            </label>
        ))
        return (
            <div>
                <p>
                    <label>
                        <input
                            name="loginId"
                            type="text"
                            value={this.state.loginId}
                            onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name="loginPsw"
                            type="password"
                            value={this.state.loginPsw}
                            onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name="sex"
                            type="radio"
                            value="male"
                            checked={this.state.sex === 'male'}
                            onChange={this.handleChange} />男
                    </label>
                    <label>
                        <input
                            name="sex"
                            type="radio"
                            value="female"
                            checked={this.state.sex === 'female'}
                            onChange={this.handleChange} />女
                    </label>
                </p>
                <p>
                    <select name="city" onChange={this.handleChange} >
                        <option value="北京" checked={this.state.city === '北京'}>北京</option>
                        <option value="南京" checked={this.state.city === '南京'}>南京</option>
                    </select>
                </p>

                {lovesElements}
            </div>
        )
    }
}
