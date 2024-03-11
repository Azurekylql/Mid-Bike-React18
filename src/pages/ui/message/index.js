import React from 'react'
import './index.less'
import { Card, Button, message } from 'antd'

export default function Message() {

    const showMessage = type => {
        message[type]('你好呀，我是message！是Mid单车的全局提示框')
    }


    return (

        <div>
            <Card title='全局提示框' className='card-warp'>
                <Button type='primary' onClick={() => showMessage('success')}>(type)success</Button>
                <Button type='primary' onClick={() => showMessage('info')}>(type)Info</Button>
                <Button type='primary' onClick={() => showMessage('warning')}>(type)Warning</Button>
                <Button type='primary' onClick={() => showMessage('error')}>(type)Error</Button>
                <Button type='primary' onClick={() => showMessage('loading')}>(type)Loading</Button>
            </Card>

        </div >
    )

}