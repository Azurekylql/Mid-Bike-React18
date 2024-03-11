import React from 'react'
import { Card, Button, Table, Modal, Form, Input, Select, message } from 'antd'
import { useEffect, useState } from 'react'
import PermissionTree from './permissionTree'
import request from '../../utils/request'


const FormItem = Form.Item
const Option = Select.Option

export default function Permission() {

    const [role, setRole] = useState([])

    const [permissionVisible, setpermissionVisible] = useState(false)

    const [roleVisible, setRoleVisible] = useState(false)

    const [roleRecord, setRoleRecord] = useState([])

    const [menu, setMenu] = useState([])

    const [menuItem, setMenuItem] = useState([])

    //创建表单实例
    const [form] = Form.useForm();

    //创建角色
    const createRole = () => {
        setRoleVisible(true)
    }

    //把数据传到后台
    const getData = async () => {
        const { role_name, role_status } = form.getFieldValue()

        if (role_name === undefined || role_status === undefined) {
            return Modal.error({
                title: '请输入角色信息'
            })
        }

        //发起请求
        try {
            const { data } = await request({
                url: "/create_role",
                method: 'post',
                data: {
                    role_name,
                    role_status
                }
            })

            if (data.code === 200) {
                Modal.success({
                    title: data.message
                })

                //关闭对话框
                setRoleVisible(false)
                //清空表单
                form.resetFields()
                //重新请求数据
                getRoleData()

            } else {
                console.log('post error')
            }

        } catch (error) {
            throw new Error(error)

        }

    }

    //设置权限对话框
    const setPromissionModal = () => {

        //只有当选中的时候，才能够打开权限设置框
        if (roleRecord.length === 0) {
            return Modal.error({
                title: '请选择角色'
            })
        } else {
            setpermissionVisible(true)
        }
    }

    const columns = [
        {
            title: '角色ID',
            dataIndex: 'id',
            width: 220
        },
        {
            title: '角色名称',
            dataIndex: 'role_name',
            width: 200
        },
        {
            title: '创建时间',
            dataIndex: 'create_time',
        },
        {
            title: '使用状态',
            dataIndex: 'status',
            render(status) {
                return status === 1 ? '启用' : '停用'
            }
        },
        {
            title: '授权时间',
            dataIndex: 'authorize_time'
        },
        {
            title: '授权人',
            dataIndex: 'authorize_user_name'
        }
    ]

    const getRoleData = async () => {
        try {
            const data = await request('/role_list')
            console.log(data.data.item);
            setRole(data.data.item.map(item => {
                item.key = item.id
                return item
            }
            ))
        } catch (error) {
            throw new Error(error)
        }

    }

    useEffect(() => {
        getRoleData()
    }, [])

    const getMenu = async () => {
        //发起请求
        try {
            const data = await request('/menu')
            console.log(data.data.menu_list)
            setMenu(data.data.menu_list)

        } catch (error) {
            throw new Error(error)
        }
    }

    useEffect(() => {
        getMenu()
    }, [])

    //设置权限操作 把勾选的数据传递给后台 请求接口
    const setPremission = async () => {
        const { data } = await request({
            url: '/set_premission',
            method: 'post',
            data: {
                id: roleRecord.id,
                status: roleRecord.status,
                menuItem
            }
        })

        if (data.code === 200) {
            Modal.success({
                title: data.message
            })

            //关闭对话框
            setpermissionVisible(false)
            //清空menuItem
            setMenuItem([])
            //重新请求后台员工数据
            getRoleData()
            //清空roleRecord
            setRoleRecord([])

        }
    }

    //表单布局
    const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 15 }
    }

    const rowSelection = {
        //改成单选
        type: 'radio',
        onChange: (selectedRowkey, selectedRows) => {
            //一点击某一行的单选框时，将对应的值保存下来，记录下来
            setRoleRecord(selectedRows[0])
            console.log(selectedRows[0].menu_item)
            setMenuItem(selectedRows[0].menu_item)
        }
    }

    return (

        <div style={{ width: '100%' }}>
            <Card>
                <Button type="primary" onClick={createRole}>创建角色</Button>
                <Button type="primary" style={{ 'marginLeft': 10 }} onClick={setPromissionModal}>设置权限</Button>
            </Card>
            <Card style={{ 'marginTop': 10 }}>
                <Table bordered dataSource={role} columns={columns} rowSelection={rowSelection}>

                </Table>

            </Card>

            <Modal
                title='创建角色'
                visible={roleVisible}
                onCancel={() => { setRoleVisible(false) }}
                onOk={getData}
            >

                <Form form={form}>
                    {/* 用户名 */}
                    <FormItem label="角色名称" name="role_name" {...formItemLayout}>
                        <Input placeholder='请输入角色名称' />
                    </FormItem>

                    {/* 对象展开（Object Spread）语法。它用于将一个对象中的所有属性复制到另一个对象中。 */}
                    <FormItem label="状态" name="role_status" {...formItemLayout}>
                        <Select>
                            <Option value='1'>启用</Option>
                            <Option value='0'>禁用</Option>
                        </Select>
                    </FormItem>

                </Form>
            </Modal>

            <Modal
                title='设置权限'
                visible={permissionVisible}
                onCancel={() => { setpermissionVisible(false) }}
                onOk={setPremission}

            >
                {/* 通过props向子组件传递menu信息 */}
                <PermissionTree menu={menu} menuItem={menuItem} roleName={roleRecord.role_name} patchMenuItem={(checkedKeys) => { setMenuItem(checkedKeys) }}></PermissionTree>
            </Modal>



        </div >
    )

}