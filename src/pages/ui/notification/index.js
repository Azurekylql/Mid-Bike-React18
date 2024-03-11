import React from 'react'
import './index.less'
import { Card, Button, notification } from 'antd'

export default function Notification() {

    // 添加一个配置，定义通知框的弹出位置
    const openNotification = (type, direction) => {

        if (direction) {
            notification.config({
                placement: direction
            })
        }



        notification[type]({
            message: '你好，这里是Mid单车',
            description: '这是简介'
        })
    }


    return (
        <div>
            <Card title='通知提醒框' className='card-warp'>
                <Button type='primary' onClick={() => openNotification('success')}>
                    Success
                </Button>
                <Button type='primary' onClick={() => openNotification('info')}>
                    Info
                </Button>
                <Button type='primary' onClick={() => openNotification('warning')}>
                    Warning
                </Button>
                <Button type='primary' onClick={() => openNotification('error')}>
                    Error
                </Button>
            </Card>

            <Card title='通知提醒框' className='card-warp' style={{ marginTop: "20px" }}>
                <Button type='primary' onClick={() => openNotification('success', 'topLeft')}>
                    Success
                </Button>
                <Button type='primary' onClick={() => openNotification('info')}>
                    Info
                </Button>
                <Button type='primary' onClick={() => openNotification('warning')}>
                    Warning
                </Button>
                <Button type='primary' onClick={() => openNotification('error')}>
                    Error
                </Button>
            </Card>
        </div>
    )

}