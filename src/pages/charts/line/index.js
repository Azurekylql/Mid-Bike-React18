import React from 'react'
import { Card } from 'antd'
//引入写好的按需导入的文件就好
import echarts from '../../../plugin/echarts'
import { useEffect } from 'react'

export default function Line() {

    const initLineOption = {
        //标题
        title: {
            text: '用户骑行订单',
            //标题水平居中
            x: 'center'
        },
        //提示框
        tooltip: {
            //触发类型 轴触发，鼠标移动到轴上就会触发
            trigger: 'axis',
        },
        xAxis: {
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            //type属性的值是value的话，不需要配置数据，y轴直接自动取series中去找数据进行图表绘制
            type: 'value'
        },
        //配置的主要是y轴的数据
        series: [
            {
                //y轴的名称
                name: '订单量',
                //图表的类型 bar时柱形图
                type: 'line',
                //y轴的值，要与x轴的data对应
                data: [1200, 1400, 1700, 1100, 2000, 2200, 1200]
            }
        ]

    }

    const initMoreLineOption = {
        //标题
        title: {
            text: '用户骑行对比',
            x: 'center'
        },
        //图例属性
        legend: {
            data: ['摩拜', '美团', 'OFO'],
            top: 40,
            botton: 40

        },
        //提示框
        tooltip: {
            //触发类型 轴触发，鼠标移动到轴上就会触发
            trigger: 'axis'
        },
        //x轴数据
        xAxis: {
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            //type属性的值是value的话，不需要配置数据，y轴直接自动取series中去找数据进行图表绘制
            type: 'value'
        },
        //配置的主要是y轴的数据
        series: [
            {
                //y轴的名称
                name: '摩拜',
                //图表的类型 bar时柱形图
                type: 'line',
                //y轴的值，要与x轴的data对应
                data: [1000, 2600, 2000, 1500, 1800, 2600, 2200]
            },
            {
                //y轴的名称
                name: '美团',
                //图表的类型 bar时柱形图
                type: 'line',
                //y轴的值，要与x轴的data对应
                data: [1500, 2000, 1700, 2100, 1500, 3200, 2000]
            },
            {
                //y轴的名称
                name: 'OFO',
                //图表的类型 bar时柱形图
                type: 'line',
                //y轴的值，要与x轴的data对应
                data: [1200, 2000, 1800, 2500, 2800, 2400, 1800]
            }
        ]

    }

    function initLine() {
        const Charts = echarts.init(document.getElementById('bass_line'))
        Charts.setOption(initLineOption)
    }

    useEffect(() => {
        initLine()
    }, [])

    function initMoreLine() {
        const Charts = echarts.init(document.getElementById('more_line'))
        Charts.setOption(initMoreLineOption)
    }

    useEffect(() => {
        initMoreLine()
    }, [])


    return (

        <div>
            <Card>
                <div id='bass_line' style={{ height: 500 }}></div>
            </Card>
            <Card style={{ 'marginTop': 20 }}>
                <div id='more_line' style={{ height: 500 }}></div>
            </Card>
        </div >
    )

}