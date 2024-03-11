import React from 'react'
import { Row, Col } from 'antd'
import Header from './component/header'
import Footer from './component/footer'
import Nav from './component/naviator'
import Home from './pages/home'
import './Admin.less'
import routes from './router'
import { useRoutes } from 'react-router-dom'

export default function Admin() {

    const router = useRoutes(routes)

    return (

        <div>
            <div className='warpper'>
                <div>
                    {/* 建立Row */}
                    <Row>
                        <Col span="3" className='warpper__left'>
                            <Nav />
                        </Col>
                        <Col span="21" className='warpper__right'>
                            <Header />
                            <Row className='warpper__right__content'>
                                {router}
                            </Row>
                            <Footer />
                        </Col>
                    </Row>
                </div>



            </div>

        </div>
    )
}