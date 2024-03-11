import React, { useRef, useState } from 'react'
import { Tabs, Card } from 'antd'

// 信息一般从数据库来

const Inititems = [
    {
        key: '1',
        label: 'Tab 1',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    }
];

export default function Tab() {

    const [activeKey, setActiveKey] = useState(Inititems[0].key)
    const [items, setItems] = useState(Inititems)

    return (
        <div>
            <Card title='Tabs标签页的基础使用' className='card-warp'>
                <Tabs activeKey='1'>
                    <Tabs.TabPane tab="Tab 1" key="1">这里是Tab Pane 1</Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 2" key="2">这里是Tab Pane 2</Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 3" key="3">这里是Tab Pane 3</Tabs.TabPane>
                </Tabs>
            </Card>

            <Card title='Tabs标签页- 使用Items数据数组' className='card-warp'>
                <Tabs type='card' items={items} defaultActiveKey="1" />
            </Card>

            <Card title='Tabs标签页- 可添加式' style={{ 'marginTop': 10 }} className='card-warp'>
                <Tabs
                    type='editable-card'
                    items={items}
                    activeKey={activeKey} />
            </Card>
        </div >
    )

}


