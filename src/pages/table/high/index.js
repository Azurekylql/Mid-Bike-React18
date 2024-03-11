import React, { useState, useEffect } from 'react'
import './index.less'
import { Button, Card, Radio, Select, Table, Modal, message } from 'antd'
// 尝试从接口拿数据
import request from '../../../utils/request'

export default function TableHigh() {

    const [user, setUser] = useState([])
    const [page, setPage] = useState({
        total_count: user.length,
        page_no: 1,
        page_Size: 8
    })

    const getUser = async () => {
        try {
            const data1 = await request('/highTable')
            console.log(data1.data.table1)
            setUser(data1.data.table1)
        } catch (error) {
            throw new Error(error)
        }
    }

    // 使用useEffect来执行getUser函数
    useEffect(() => {
        getUser()
    }, [])

    // 获取到的table的描述
    const userColumns = [

        {
            title: 'id',
            dataIndex: 'id',
            width: 50,
            ket: 'id'
        },
        {
            title: 'key',
            dataIndex: 'key',
            width: 120,
            key: 'name'
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
        },
        {
            title: '操作',
            key: 'action',
            render: function (record) {
                return (
                    <Button
                        type='primary'
                        onClick={() => {
                            removeItem(record.id)
                        }}
                    >
                        删除
                    </Button>
                )
            }
        }
    ]

    // 设置多选,可以绑定onChange事件  selectRowKeys用户选中的key； selectRows用户选中的都会放在这个数组中（多选）
    const rowSelection = {
        type: 'radio',
        onChange: (selectRowKeys, selectRows) => {
            console.log(`key:${selectRowKeys}`, `row:${selectRows}`)
        }
    }

    const removeItem = (id) => {
        Modal.confirm({
            title: '确认',
            content: '确认要删除这个数据吗？',
            onOk: () => {
                //删除一条数据，一般都是后端数据库做的，前端向后端传递相应的id
                message.success(`id:${id} 删除成功`)
                const newUser = user.filter({ id }, user => user.id !== id)

                setUser(newUser)
                // 前端做删除的话，一刷新就回来了
            }
        })
        user.push()
    }


    return (
        <div>
            <Card title="不分页，头部固定" style={{ 'margin': 15 }}>
                <Table dataSource={user} columns={userColumns} pagination={false} scroll={{ y: 260 }} bordered />
            </Card>

            <Card title="分页器" style={{ 'margin': 15 }}>
                <Table dataSource={user} columns={userColumns} bordered pagination={{ position: ['bottomCenter'], pageSize: page.page_Size }} />
            </Card>

            <Card title="操作按钮" style={{ 'margin': 15 }}>
                <Table
                    dataSource={user}
                    columns={userColumns}
                    bordered
                    pagination={{
                        position: ['bottomCenter'],
                        pageSize: page.page_Size
                    }}
                    rowSelection={rowSelection}
                    // 设置行属性 record是选中行的具体数据
                    onRow={record => {
                        return {
                            onClick: () => {
                                console.log(record)
                            }
                        }
                    }} />
            </Card>
        </div >
    )

}