import React, { useState } from 'react'
import './index.less'
import { Button, Card, Space, Dropdown, Menu, Radio } from 'antd'
import {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons'


export default function UButton() {

    const [loading, setLoading] = useState(true);
    const [size, setSize] = useState('default');
    const LoadingClose = () => {
        setLoading(false);
    }

    const menu = (
        <Menu items={[
            {
                key: 1,
                label: 'item1'
            },
            {
                key: 2,
                label: 'item2'
            },
            {
                key: 3,
                label: 'item3'
            }

        ]}>

        </Menu>
    )

    const change = (e) => {
        setSize(e.target.value)
    }

    return (

        <div className=''>
            {/* Card卡片组件 是最基本的卡片容器 */}
            <Card title='基础按钮' className='card-warp'>
                {/* type设置按钮的类型 */}
                <Button type='primary'>Mid单车</Button>
                <Button>Mid单车</Button>
                <Button type='dashed'>Mid单车</Button>
                <Button danger>Mid单车</Button>
                <Button danger type='primary'>danger</Button>
                <Button disabled>禁用</Button>
            </Card>

            <Card title='图形按钮' className='card-warp'>
                <Button icon={<PlusOutlined />}>新建</Button>
                <Button icon={<EditOutlined />}>编辑</Button>
                <Button icon={<DeleteOutlined />}>删除</Button>
                {/* 可以通过shape来设置按钮形状 */}
                <Button shape='circle' icon={<SearchOutlined />}></Button>
                <Button icon={<SearchOutlined />} type='primary'>搜索</Button>
            </Card>

            {/* 添加一个loading属性 state状态 */}
            <Card title='Loading按钮' className='card-warp'>
                <Button type='primary' loading={loading}>确定</Button>
                <Button type='primary' shape='circle' loading={loading}></Button>
                <Button type='primary' onClick={LoadingClose}>关闭加载状态</Button>
            </Card>

            <Card title='按钮组 Space组件的使用'>
                {/* Space可以拉开统一的空间，避免组件挨在一起 */}
                <Space>
                    <Button type='primary' icon={<LeftOutlined />}>确定</Button>
                    <Button type='primary' icon={<RightOutlined />}>返回</Button>
                    {/* 如果按钮超过了三个以上 推荐使用overlay 属性去设置下拉菜单 */}
                    <Dropdown.Button overlay={menu}>更多</ Dropdown.Button>
                </Space>
            </Card>

            <Card title='按钮尺寸'>
                {/* 单选框 Radio */}
                <Radio.Group
                    value={size}
                    onChange={e => {
                        change(e)
                    }}
                >
                    <Radio value="small">small</Radio>
                    <Radio value="default">default</Radio>
                    <Radio value="large">large</Radio>
                </Radio.Group>

                <Button type='primary' size={size}>size</Button>

            </Card>
        </div >
    )

}