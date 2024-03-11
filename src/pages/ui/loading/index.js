import React, { useState } from 'react'
import './index.less'
import { Card, Spin, Alert, Button } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export default function ULoading() {

    const [display, setDisplay] = useState(true);

    const ChangeDisplay = () => {
        setDisplay(!display);
    }

    return (

        <div>
            {/* 基础使用  spin用于写加载状态*/}
            <Card title='Spin的基础使用' className='card-wrap'>
                <Spin size='small' spinning={display}></Spin>
                <Spin size='default' spinning={display} style={{ margin: '0 10px' }}></Spin>
                <Spin size='large' spinning={display} ></Spin>
                <Spin indicator={<LoadingOutlined />} style={{ margin: '0 10px' }} spinning={display}></Spin>
            </Card>

            {/* 可关闭式 内容遮罩 */}
            <Card title='内容遮罩' className='card-wrap'>
                <Alert
                    message='Mid单车'
                    description='解决最后一公里'
                    type='info'
                    style={{ marginBottom: '20px' }}
                    closable
                ></Alert>

                <Spin spinning={display} tip="加载中">
                    <Alert
                        message='Mid单车'
                        description='解决最后一公里 (Spin与Alert的嵌套使用)'
                        type='success'
                        style={{ marginBottom: '20px' }}
                        closable
                    ></Alert>
                </Spin>

                <Button type='primary' onClick={ChangeDisplay}>{display ? '加载完毕' : 'Loading'}</Button>

            </Card>
        </div >
    )

}