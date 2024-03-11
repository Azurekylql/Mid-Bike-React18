import React, { useState, useEffect } from 'react'
import './index.less'
import { Card, Table } from 'antd'
// 尝试从接口拿数据
import request from '../../../utils/request'

export default function TableBasic() {

    const [user, setUser] = useState([])

    // 获取数据
    const getUser = async () => {
        try {
            const data = await request('/table')
            console.log(data.data.table)
            setUser(data.data.table)
        } catch (error) {
            throw new Error(error)
        }
    }

    // 使用useEffect来执行getUser函数
    useEffect(() => {
        getUser()
    }, [])

    //模拟数据
    const dataSource = []
    for (let i = 0; i <= 100; i++) {
        dataSource.push({
            key: i,
            name: `User_No.${i}`,
            age: `${i}岁`,
            address: `广东省广州市第${i}中学`
        })
    }

    // 表格的格式需要描述 描述列名
    const cloumns = [
        {
            title: '姓名',
            dataIndex: 'name',
            width: 120,
            key: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            width: 80,
            key: 'age'
        },
        {
            title: '地址',
            dataIndex: 'address',
            width: 300,
            key: 'address'
        }
    ]

    // 获取到的table的描述
    const userColumns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: 50,
            ket: 'id'
        },
        {
            title: '姓名',
            dataIndex: 'name',
            width: 120,
            key: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            width: 80,
            key: 'age'
        },
        {
            title: '地址',
            dataIndex: 'address',
            width: 300,
            key: 'address'
        }
    ]

    return (
        <div>
            <Card title="基础表格">
                <Table dataSource={dataSource} columns={cloumns} />
            </Card>

            <Card title="基础表格2.0_获取接口中的数据">
                <Table dataSource={user} columns={userColumns} />
            </Card>
        </div >
    )

}