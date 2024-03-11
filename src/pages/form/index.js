import React from 'react'
import './index.less'
import { Outlet } from 'react-router-dom'


export default function Form() {
    return (

        <div style={{ width: '100%' }}>
            {/* Form组件的作用就是为了渲染子路由 */}

            <Outlet />

        </div >
    )

}