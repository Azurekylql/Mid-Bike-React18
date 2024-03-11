import React, { useState, useEffect } from 'react'
import request from '../../utils/request'
import { Table } from 'antd'
// 处理时间戳
import moment from 'moment'
import 'moment/locale/zh-cn'

export default function CityList() {
    const [cityList, setCityList] = useState([])

    const getCity = async () => {
        try {
            // {data} 是一种解构赋值语法，它会从对象中提取名为 data 的属性值
            const { data } = await request('/city')
            console.log(data.city_list)
            // 添加唯一的key
            setCityList(data.city_list.map((item, index) => {
                item.key = index
                return item
            }))

        } catch (error) {
            throw new Error(error)
        }
    }


    useEffect(() => {
        getCity()
    }, [])

    // 描述表格
    const columns = [
        {
            title: '城市ID',
            dataIndex: "id",
        },
        {
            title: '城市名称',
            dataIndex: "name",
        },
        {
            title: '用车模式',
            dataIndex: "mode",
            render: (mode) => (mode === 1 ? '停车点' : '禁停区')
        },
        {
            title: '营运模式',
            dataIndex: "op_mode",
            render: (op_mode) => (op_mode === 1 ? '自营' : '加盟')
        },
        {
            title: '城市开通时间',
            dataIndex: "open_time",
        },

        {
            title: '管理员',
            dataIndex: "sys_user_name",
        },

        {
            title: '操作时间',
            dataIndex: "update_time",
            render: (update_time) => (moment.unix(update_time).format('dddd h:mm:ss'))
        },
    ]

    return (
        <div>
            <Table bordered dataSource={cityList} columns={columns} pagination={{ pageSize: 12 }}>

            </Table>
        </div >
    )

}