import React from 'react'
import './index.less'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Form, Input, Button } from 'antd'

export default function FLogin() {

    //提交表单和数据验证完成之后的回调函数 获取输入的信息
    const getData = values => {
        console.log(values)
    }

    return (

        <div>
            <Card title="行内登录表单">
                {/* layout 菜单布局 */}
                <Form layout='inline'>
                    {/* 是表单的字段组件 */}
                    <Form.Item
                        // 这里的name是字段名 传给服务器用的
                        name="username"
                        // 校验规则
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名'
                            }
                        ]}

                    >
                        <Input placeholder='请输入用户名' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码'
                            }
                        ]}
                    >
                        {/* 输入类型为密码 */}
                        <Input.Password placeholder='请输入密码' />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit'>登录</Button>
                    </Form.Item>

                </Form>
            </Card>

            <Card title="水平登录表单" style={{ 'marginTop': 10 }}>
                {/* 给表单绑定一个提交事件 */}
                <Form
                    style={{ width: 350 }}
                    name='login'
                    onFinish={getData}

                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名'
                            },
                            {
                                // 用正则去指定rules
                                pattern: /\w+/,
                                message: '用户名不合法'
                            }
                        ]}
                    >
                        {/* prefix是带有图标的input */}
                        <Input
                            prefix={<UserOutlined />}
                            placeholder='请输入用户名' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码'
                            },
                            {
                                // 用正则去指定rules
                                min: 5,
                                max: 12,
                                message: '请检查密码是否安全'
                            }
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            placeholder='请输入密码' />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit'>登录</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )

}