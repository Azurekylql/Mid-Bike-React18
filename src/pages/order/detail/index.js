import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.less'


export default function Detail() {

    // 拿到路由传递过来的参数，作为我们的查询条件在数据库中查询
    const { order_id } = useParams()
    const navigate = useNavigate()
    const [orderDetail, setOrderDetail] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5003/api/${order_id}`);
                console.log(response.data.user.order_detail[0].order_sn)
                setOrderDetail(response.data.user.order_detail[0]);
                console.log(orderDetail)  //就是那个对象了
            } catch (error) {
                console.error('Error fetching order detail:', error);
            }
        }; fetchData();
    }, [order_id]);

    return (

        <div style={{ width: '100%' }}>
            <Card>
                <div className='detail-items'>
                    <div className='item-title'>基础信息</div>
                    <li>
                        <div className='detail-form-left'>用户模式：</div>
                        <div className='detail-form-content'>
                            {orderDetail.mode === 1 ? '服务区' : '停车点'}
                        </div>
                    </li>
                    <li>
                        <div className='detail-form-left'>订单编号：</div>
                        <div className='detail-form-content'>
                            {order_id}
                        </div>
                    </li>
                    <li>
                        <div className='detail-form-left'>车辆编号：</div>
                        <div className='detail-form-content'>
                            {orderDetail.bike_sn}
                        </div>
                    </li>
                    <li>
                        <div className='detail-form-left'>用户姓名：</div>
                        <div className='detail-form-content'>
                            {orderDetail.user_name}
                        </div>
                    </li>
                    <li>
                        <div className='detail-form-left'>手机号码：</div>
                        <div className='detail-form-content'>
                            {orderDetail.mobile}
                        </div>
                    </li>
                </div>
                <Button type='primary' onClick={() => { navigate(-1) }}>返回</Button>

            </Card>

        </div >
    )

}