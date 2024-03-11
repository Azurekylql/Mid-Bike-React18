import React, { forwardRef, useImperativeHandle } from 'react'
import { Form, Button, Select } from 'antd'
const FormItem = Form.Item
const Option = Select.Option

function OpenCityForm(props, ref) {

    // 定义一个示例
    const [form] = Form.useForm()

    // 定义实例中要暴露什么
    useImperativeHandle(ref, () => ({
        formFields: form
    }))

    return (

        <div style={{ 'width': '100%' }}>
            <Form layout="horizontal"
                initialValues={{
                    city_id: '北京市',
                    mode_id: '指定停车点模式',
                    op_mode: '自营',
                }}
                // 获取表单示例
                form={form}
            >
                <FormItem label="城市" name='city_id'>
                    <Select style={{ width: 200 }} placeholder="全部">
                        <Option value=''>全部</Option>
                        <Option value='1'>北京市</Option>
                        <Option value='2'>天津市</Option>
                        <Option value='3'>深圳市</Option>
                        <Option value='4'>武汉市</Option>
                    </Select>
                </FormItem>

                <FormItem label="用车模式" name='mode_id'>
                    <Select style={{ width: 200 }} placeholder="全部">
                        <Option value=''>全部</Option>
                        <Option value='1'>指定停车点模式</Option>
                        <Option value='2'>禁停区模式</Option>
                    </Select>
                </FormItem>

                <FormItem label="营运模式" name='op_mode'>
                    <Select style={{ width: 200 }}>
                        <Option value=''>全部</Option>
                        <Option value='1'>自营</Option>
                        <Option value='2'>加盟</Option>
                    </Select>
                </FormItem>
            </Form>
        </div >
    )

}

// 使用了ref 要这样子暴露
export default forwardRef(OpenCityForm)