import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import "./index.less"
import { useDispatch } from 'react-redux'
import { setCurrent } from '../../store/menuSlice'

export default function Nav() {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    // 编写菜单栏 使用antd
    const items = [
        { label: '首页', key: '/home' },

        {
            label: 'UI',
            key: '/ui',
            children: [
                { label: '按钮', key: '/ui/buttons' },
                { label: '弹框', key: '/ui/modals' },
                { label: 'Loading', key: '/ui/loadings' },
                { label: '通知提醒', key: '/ui/notification' },
                { label: '全局Message', key: '/ui/messages' },
                { label: 'Tab页签', key: '/ui/tabs' },
                { label: '图片画廊', key: '/ui/gallery' },
                { label: '轮播图', key: '/ui/carousel' },
            ]
        },
        {
            label: '表单',
            key: '/form',
            children: [
                { label: '登录', key: '/form/login' },
                { label: '注册', key: '/form/register' },
            ]
        },
        {
            label: '表格',
            key: '/table',
            children: [
                { label: '基础表格', key: '/table/basic' },
                { label: '高级表格', key: '/table/high' }]
        },
        { label: '富文本', key: '/richText' },
        { label: '城市管理', key: '/city' },
        {
            label: '订单管理',
            key: '/detail'
        },
        { label: '员工管理', key: '/employee' },
        { label: '车辆地图', key: '/BikeMap' },
        {
            label: '图标',
            key: '/icons1',
            children: [
                { label: '柱状图', key: '/icons1/barChart' },
                { label: '饼图', key: '/icons1/pieChart' },
                { label: '折线图', key: '/icons1/lineChart' },

            ]
        },
        { label: '权限设置', key: '/permission' },

    ]

    const click = e => {
        navigate(e.key)
        dispatch(setCurrent(e.domEvent.target.innerText))
    }

    return (
        <>
            <div className='warpper__left__logo'>
                <img src="/assets/logo-ant.svg" alt="logo"></img>
                <h1>单车后台管理系统</h1>

            </div>
            {/* 渲染数据 */}
            <Menu
                defaultSelectedKeys={['/home']}  //默认选中
                defaultOpenKeys={['sub1']}  //菜单默认展开

                items={items}
                theme="dark"
                onClick={click}
            />

        </>
    )
}