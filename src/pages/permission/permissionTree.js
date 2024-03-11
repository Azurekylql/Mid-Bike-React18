import React from 'react'
import { Form, Input, Select, Tree } from 'antd'
import { useEffect, useState } from 'react'
import request from '../../utils/request'
const FormItem = Form.Item
const Option = Select.Option

//树形组件
export default function PermissionTree(props) {

    console.log(props)

    //解构出来
    const { menu, menuItem, roleName, patchMenuItem } = props

    //表单布局
    const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 15 }
    }


    //props是一个只读属性，子组件不能修改父组件在渲染时传入的props
    //解决方法就是父组件给子组件传递一个函数进来
    const onCheck = (checkedKeys) => {
        console.log(checkedKeys)
        patchMenuItem(checkedKeys)
    }

    return (
        <div>
            <Form
                initialValues={{
                    role_status: 1
                }}
            >
                <FormItem label="角色名称" {...formItemLayout}>
                    {/* 不可更改内容的输入框 */}
                    <Input value={roleName} disabled />
                </FormItem>

                <FormItem label="状态" name="role_status" {...formItemLayout}>
                    <Select>
                        <Option value='1'>启用</Option>
                        <Option value='0'>禁用</Option>
                    </Select>
                </FormItem>
                {/* Tree组件中的数据从父组件Permission中拿 */}

            </Form>
            <Tree
                checkable
                treeData={menu}
                expandedKeys={menuItem}
                onCheck={onCheck}
            />

        </div >
    )

}