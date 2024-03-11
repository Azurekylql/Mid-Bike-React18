import React from 'react'
import { Card } from 'antd'
//引入写好的按需导入的文件就好
import echarts from '../../../plugin/echarts'
import { useEffect } from 'react'

export default function Pie() {

    const initPieOption = {
        //标题
        title: {
            text: '用户骑行订单',
            //标题水平居中
            x: 'center'
        },
        //图例
        legend: {
            //设置图例的方向
            orient: 'horizontal',
            //偏移方向
            right: 10, top: 40, bottom: 30,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        //提示框
        tooltip: {
            //触发类型 轴触发，鼠标移动到轴上就会触发
            trigger: 'item',
            //格式化配置内容样式 在饼图：a=> series.name b=> series.data.name
            // c=> series.data.value  d=>百分比
            formatter: '{a}<br/>{b}:{c}({d}%)'
        },
        //配置的主要是y轴的数据
        series: [
            {
                //y轴的名称
                name: '订单量',
                //图表的类型 bar时柱形图
                type: 'pie',
                //y轴的值，要与x轴的data对应
                data: [{
                    value: 1200,
                    name: '周一'
                },
                {
                    value: 1400,
                    name: '周二'
                },
                {
                    value: 1700,
                    name: '周三'
                },
                {
                    value: 1100,
                    name: '周四'
                },
                {
                    value: 2000,
                    name: '周五'
                },
                {
                    value: 2200,
                    name: '周六'
                },
                {
                    value: 1200,
                    name: '周日'
                }
                ]
            }
        ]

    }

    const initRoundPieOption = {
        //标题
        title: {
            text: '用户骑行订单',
            //标题水平居中
            x: 'center'
        },
        //图例
        legend: {
            //设置图例的方向
            orient: 'vertial',
            //偏移方向
            right: 10, top: 40, bottom: 30,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        //提示框
        tooltip: {
            //触发类型 轴触发，鼠标移动到轴上就会触发
            trigger: 'item',
            //格式化配置内容样式 在饼图：a=> series.name b=> series.data.name
            // c=> series.data.value  d=>百分比
            formatter: '{a}<br/>{b}:{c}({d}%)'
        },
        //配置的主要是y轴的数据
        series: [
            {
                //y轴的名称
                name: '订单量',
                //图表的类型 bar时柱形图
                type: 'pie',
                //y轴的值，要与x轴的data对应
                radius: ['50%', '80%'],
                data: [{
                    value: 1200,
                    name: '周一'
                },
                {
                    value: 1400,
                    name: '周二'
                },
                {
                    value: 1700,
                    name: '周三'
                },
                {
                    value: 1100,
                    name: '周四'
                },
                {
                    value: 2000,
                    name: '周五'
                },
                {
                    value: 2200,
                    name: '周六'
                },
                {
                    value: 1200,
                    name: '周日'
                }
                ]
            }
        ]

    }

    function initPie() {
        const Charts = echarts.init(document.getElementById('pie'))
        Charts.setOption(initPieOption)
    }

    useEffect(() => {
        initPie()

    }, [])

    function roundPie() {
        const Charts = echarts.init(document.getElementById('round_pie'))
        Charts.setOption(initRoundPieOption)
    }

    useEffect(() => {
        roundPie()
    }, [])


    return (

        <div style={{ width: '100%' }}>
            <Card>
                <div id='pie' style={{ height: 500 }}></div>
            </Card>
            <Card>
                <div id='round_pie' style={{ height: 500 }}></div>
            </Card>
        </div >
    )

}