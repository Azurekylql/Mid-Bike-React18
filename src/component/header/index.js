import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import "./index.less"
import moment from 'moment'
//import axios from 'axios'
import request from '../../utils/request'
import { useSelector } from 'react-redux'
import { Consumer } from 'react-redux'

//引入中文 因为这里获取到的时间都原本为英文的
import 'moment/locale/zh-cn'

//设置中文
moment.locale('zh-cn')

export default function Header() {

    // 获取当前时间
    const getTime = () => {
        return moment().format('YYYY-MMMM dddd h:mm:ss a')
    }

    const [name, setName] = useState('Mid单车')
    const [time, setTime] = useState(getTime())
    const [weather, setWeather] = useState()

    const menu = useSelector(state => state.menu)


    //定时器函数等使用副作用来写 在这里 等组件渲染完毕之后，useeffect中的设置时间间隔的函数被调用，1秒之后执行getTime()，然后设置setTime(time)

    useEffect(() => {
        const timer = setInterval(() => {
            const time = getTime()
            setTime(time)
        }, 1000)

        //清除定时器 组件卸载前执行的清理机制
        return () => {
            clearInterval(timer)
        }

    }, [])

    const getWeather = async () => {
        try {
            const data = await request('/weather')
            setWeather(data.data.weather)
            console.log(data.data.weather)
        } catch (error) {
            throw new Error(error)
        }
    }

    useEffect(() => {
        getWeather()
    }, [])

    //啊啊啊！可以！调用接口成功啦




    return (

        <div className='warpper__right__header'>
            {/* 欢迎 */}
            <Row className='warpper__right__top'>
                <Col span="24">
                    <span>欢迎，{name}</span>
                    <a href='/#'>退出</a>
                </Col>


            </Row>
            {/* 面包屑 */}
            <Row className='warpper__right__breadcrumb'>
                <Col span="4" className='breadcrumb__title'>
                    {menu.current}
                </Col>

                <Col span="20" className='warpper__right__weather'>
                    <span className='weather__date'>{time}</span>
                    <span className='weather__weather'>天气：{weather}</span>

                </Col>


            </Row>

        </div>
    )
}