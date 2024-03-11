import React from 'react'
import './index.less'
import { Card, Input, Form, Button, Cascader, Select } from 'antd';

const FormItem = Form.Item

export default function FRegister() {

    const options = [
        {
            value: '广东',
            label: '广东',
            children: [
                {
                    value: '广州',
                    label: '广州',
                    children: [
                        {
                            value: '白云区',
                            label: '白云区',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];

    const onChange = (value) => {
        console.log(value);
    };

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Card>
            <Form
                name="register"
                style={{ width: 350 }}
                initialValues={{
                    address: ['广东', '广州', '白云区'],
                    prifix: 'male'
                }}
                onFinish={onFinish}
            >
                <FormItem
                    label='注册'
                    hasFeedback
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: '请输入你的邮箱地址'
                        }, {
                            type: 'email',
                            message: '用户名不合法'
                        }
                    ]}
                >
                    <Input />
                </FormItem>

                <FormItem
                    label='密码'
                    // 展示校验状态的图标
                    hasFeedback
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: '请输入你的密码'
                        }
                    ]}
                >
                    <Input.Password />
                </FormItem>

                <FormItem
                    label='确认密码'
                    hasFeedback
                    name='confirm-password'
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: '请确认你的密码'
                        },
                        // getFieldValue是用来获取表单中对应字段名的数据，要作为箭头函数传入参数
                        (({ getFieldValue }) => ({
                            validator(rule, value) {
                                // 这里的value就是confirm-password的值
                                if (getFieldValue('password') === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject('两次输入的密码不一致')
                            }

                        })
                        )
                    ]}

                // 当字段之间存在依赖关系的时候，如果一个字段设置了dependencis
                // 他所依赖的字段更新的时候，会自动地触发更新与校验
                >
                    <Input.Password />
                </FormItem>

                {/* 级联菜单 Cascader  由于也是表单中的一项，因此要写在表单item中*/}
                <FormItem
                    label='地址'
                    name='address'
                    rules={[
                        {
                            type: 'array',
                            required: true,
                            message: '请选择地址'
                        }
                    ]}

                >
                    <Cascader options={options} onChange={onChange} />
                </FormItem>

                {/* 下拉菜单 Select*/}
                <FormItem
                    label="性别"
                    name="prifix"
                >
                    <Select>
                        <Select.Option value='male'>男</Select.Option>
                        <Select.Option value='female'>女</Select.Option>
                        <Select.Option value='no'>保密</Select.Option>
                    </Select>

                </FormItem>

                <FormItem>
                    <Button type='primary' htmlType='submit'>注册</Button>
                </FormItem>
            </Form>
        </Card >
    )
}