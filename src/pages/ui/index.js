import React from 'react'
import './ui.less'
import { Outlet } from 'react-router-dom'


export default function Ui() {
    return (

        <div className='ui-wrap'>

            <Outlet />

        </div >
    )

}