import React, { useState } from 'react'
import './index.less'
import { Card, Row, Col, Modal } from 'antd'
import Meta from 'antd/lib/card/Meta'

export default function Gallery() {

    const [visable, setVisable] = useState(0);
    const [url, setUrl] = useState('')

    // 二维数组
    const imgs = [
        ['1.jpg', '2.jpg', '3.jpg'],
        ['4.jpg', '5.jpg', '6.jpg'],
        ['7.jpg', '8.jpg', '9.jpg'],
        ['10.jpg', '11.jpg', '12.jpg'],
        ['13.jpg', '14.jpg', '15.jpg']
    ]

    const openImg = imgsrc => {
        console.log(imgsrc)
        // 修改图片的visable属性
        setVisable(1)
        setUrl(`/gallery/${imgsrc}`)
        console.log(url)
    }



    const imgList = imgs.map(list =>
        list.map(item => (
            <Card
                style={{ 'marginBottom': 10 }}
                cover={<img src={`/gallery/${item}`} alt='我是img' />}
                key={item}
                onClick={() => { openImg(item) }}
            >

                <Meta title='Mid单车后台管理系统' description='你好啊，这里是小编制作的Mid管理系统'></Meta>

            </Card>
        ))
    )

    return (
        <div className='card-warp'>
            {/* gutter 表示栅格（各行）之间的距离，md用于设置（列之间的）水平间隔 */}
            <Row gutter={10}>
                <Col md={5}>{imgList[0]}</Col>
                <Col md={5}>{imgList[1]}</Col>
                <Col md={5}>{imgList[2]}</Col>
                <Col md={5}>{imgList[3]}</Col>
                <Col md={4}>{imgList[4]}</Col>
            </Row>
            <Modal width={300} height={500} title='图片展示' open={visable} footer={null} onCancel={() => { setVisable(false) }}>
                <img src={url} alt="" style={{ 'width': '100%' }} />
            </Modal>


        </div >
    )

}