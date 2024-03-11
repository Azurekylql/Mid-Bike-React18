import React, { useEffect, useState } from 'react'
import { Card, Button, Form, DatePicker, Select, Table, rowSelection, Modal } from 'antd'
import moment from 'moment'
import { useForm } from 'antd/lib/form/Form'
import request from '../../utils/request'
import { useNavigate } from 'react-router-dom'

const FormItem = Form.Item
const Option = Select.Option


export default function Order() {

    const [form] = Form.useForm()
    const [list, setList] = useState([])
    const [orderSn, setorderSn] = useState(0);
    const navigate = useNavigate();

    const getData = async (values) => {
        // 传递时间戳

        const { start_time, end_time, status } = values
        const start = moment(start_time).format('X')
        const end = moment(end_time).format('X')
        const params = { start, end, status }

        try {
            console.log('发送请求前的处理：', params);

            const { data } = await request({
                url: '/order_filter',
                method: 'get',
                params
            })
            setList(data.item_list)
        } catch (error) {
            throw new Error(error)
        }

    }

    //订单列表配置
    const getList = async () => {
        try {
            const data1 = await request('/order_list1')
            setList(data1.data.item_list.map(item => {
                item.key = item.order_sn
                return item
            }))
        } catch (error) {
            throw new Error(error)
        }
    }

    useEffect(() => {
        getList()
    }, [])

    const onReset = () => {
        form.resetFields()
    }

    //订单表格中的配置描述
    const columns = [
        {
            title: '订单编号',
            dataIndex: 'order_sn'
        },
        {
            title: '车辆编号',
            dataIndex: 'bike_sn'
        },
        {
            title: '用户名',
            dataIndex: 'user_name'
        },
        {
            title: '手机号',
            dataIndex: 'mobile'
        },
        {
            title: '里程',
            dataIndex: 'distance',
            render(distance) {
                return distance / 1000 + 'Km'
            }
        },
        {
            title: '行驶时长',
            dataIndex: 'total_time'
        },
        {
            title: '状态',
            dataIndex: 'status',
            render(status) {
                return status === 1 ? '进行中' : '行程结束'
            }
        },
        {
            title: '开始时间',
            dataIndex: 'start_time'
        },
        {
            title: '结束时间',
            dataIndex: 'end_time'
        },
        {
            title: '订单金额',
            dataIndex: 'total_fee'
        },
        {
            title: '实付金额',
            dataIndex: 'user_pay'
        }

    ]

    const rowSelection = {
        //默认是checkbox
        type: 'radio',
        onChange: (selectedRowkey, selectedRows) => {
            setorderSn(selectedRows[0].order_sn)
        },
    };

    const onDetail = () => {
        if (orderSn === 0) {
            return Modal.error({
                title: '请选择订单'
            })
        }

        navigate(`/detail/${orderSn}`)
    }

    return (

        <div style={{ width: '100%' }}>
            <Card>
                <Form layout='inline' form={form} onFinish={getData}>
                    <FormItem name="start_time">
                        <DatePicker placeholder='请选择当前时间' />
                    </FormItem>

                    <FormItem name="end_time">
                        <DatePicker placeholder='请选择结束时间' />
                    </FormItem>

                    <FormItem name="status" label='订单状态' >
                        <Select placeholder="请选择订单状态" style={{ width: 120 }}>
                            <Option value='0'>全部</Option>
                            <Option value='1'>进行中</Option>
                            <Option value='2'>行程结束</Option>
                        </Select>
                    </FormItem>

                    <FormItem >
                        <Button type='primary' style={{ margin: '0 20px' }} htmlType='submit'>查询</Button>
                        <Button type='primary' onClick={onReset}>重置</Button>
                    </FormItem>


                </Form>
            </Card>
            <Card>
                <Button type='primary' style={{ margin: '0 12px ' }} onClick={onDetail}>订单详情</Button>
                <Button type='primary'>结束订单</Button>
            </Card>
            <Card>
                <Table rowSelection={rowSelection} bordered dataSource={list} columns={columns}>

                </Table>
            </Card>
        </div >
    )

}