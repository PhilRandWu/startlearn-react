import React, { Component } from 'react'
import Form from './index'

export default class Test extends Component {
    render() {
        return (
            <Form onSubmit={(datas) => {
                console.log(datas)
            }}>
                <div>
                    账号:  <Form.input name="loginId" type="text" />
                </div>
                <div>
                    密码: <Form.input name="loginPsw" type="password" />
                </div>
                <Form.button>提交</Form.button>
            </Form>
        )
    }
}
