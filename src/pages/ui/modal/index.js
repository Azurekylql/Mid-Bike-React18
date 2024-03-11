import React, { useState } from 'react'
import './index.less'
import { Card, Button, Modal } from 'antd'


export default function UModal() {

    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const showModal1 = () => {
        setIsModalOpen1(true);
    };

    const handleOk1 = () => {
        setIsModalOpen1(false);
    };

    const handleCancel1 = () => {
        setIsModalOpen1(false);
    };


    return (

        <div>
            <h1>UModal</h1>
            {/* 基础对话框 */}
            <Card title='基础对话框' className='card-warp'>
                <Button type='primary' onClick={showModal1}>打开1</Button>
            </Card>


            <Modal
                title='react'
                visible={isModalOpen1}
                onOk={handleOk1}
                onCancel={handleCancel1}
            >
                <p>Hello</p>
            </Modal>

        </div >
    )

}