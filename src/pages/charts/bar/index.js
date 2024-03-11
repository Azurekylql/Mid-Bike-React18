import React from 'react'
import { Card } from 'antd'
//引入写好的按需导入的文件就好
import echarts from '../../../plugin/echarts'
import { useEffect } from 'react'


//1.准备一个容器 容器具有宽高 记得一定要给高度
//2.获取容器 会操作DOM 要使用副作用 通过echarts.init()方法初始化echarts实例
//3.根据个人的需求配置图标
//4.通过setOption()方法生成图标

export default function Bar() {

    const initBaseBarOption = {
        //标题
        title: {
            text: '用户骑行订单'
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
                name: '订单量',
                //图表的类型 bar时柱形图
                type: 'bar',
                //y轴的值，要与x轴的data对应
                data: [1000, 3000, 2000, 1500, 1800, 2600, 2200]
            }
        ]

    }

    const initBarOption = {
        //标题
        title: {
            text: '用户骑行对比'
        },
        //图例属性
        legend: {
            data: ['摩拜', '美团', 'OFO']
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
                type: 'bar',
                //y轴的值，要与x轴的data对应
                data: [1000, 2600, 2000, 1500, 1800, 2600, 2200]
            },
            {
                //y轴的名称
                name: '美团',
                //图表的类型 bar时柱形图
                type: 'bar',
                //y轴的值，要与x轴的data对应
                data: [1500, 2000, 1700, 2100, 1500, 3200, 2000]
            },
            {
                //y轴的名称
                name: 'OFO',
                //图表的类型 bar时柱形图
                type: 'bar',
                //y轴的值，要与x轴的data对应
                data: [1200, 2000, 1800, 2500, 2800, 2400, 1800]
            }
        ]

    }

    function initBaseBar() {
        const Charts = echarts.init(document.getElementById('bass_bar'))
        Charts.setOption(initBaseBarOption)
    }

    useEffect(() => {
        initBaseBar()
    }, [])

    function initBar() {
        const Charts = echarts.init(document.getElementById('init_bar'))
        Charts.setOption(initBarOption)
    }

    useEffect(() => {
        initBar()
    }, [])


    return (

        <div>
            <Card>
                <div id='bass_bar' style={{ height: 500 }}></div>
            </Card>
            <Card style={{ marginTop: 20 }}>
                <div id='init_bar' style={{ height: 500 }}></div>
            </Card>
        </div >
    )

}