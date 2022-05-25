import React from 'react'
import Layout from '../Layout/Layout'

export default function App() {
    const configProps = {
        leftWidth: 20,
        rightWidth: 60,
        leftContent: <div>左边区域</div>,
        rightContent: <div>右边区域</div>
    }
    return (
        <Layout {...configProps}>
            <h1>中间区域</h1>
        </Layout>
    )
}
