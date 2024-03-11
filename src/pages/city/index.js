import React, { useState, useRef } from 'react'
import FilterForm from './FilterForm'
import { Card, Button, Modal } from 'antd'
import OpenCityForm from './openCityForm'
import CityList from './cityList'

export default function City() {

    const [modal, setModal] = useState(false);

    const cityRefs = useRef()

    const getData = () => {
        // 在这里使用 useImperativeHandle，暴露给父组件的方法或属性
        console.log(cityRefs.current.formFields.getFieldsValue())
        // 拿到这些值之后，传给后台接口，后台接口根据传来的条件去查询，返回符合的数据
    }

    const addCity = () => {
        setModal(true);
    }

    return (

        <div style={{ width: '100%' }}>
            <Card>
                <FilterForm />
            </Card>
            <Card style={{ marginTop: '20px' }}>
                <Button type='primary' onClick={addCity} style={{ marginBottom: 15 }}>开通城市</Button>
                <CityList />
            </Card>

            <Modal title='开通城市' visible={modal} onCancel={() => { setModal(false) }} onOk={getData}>
                <OpenCityForm ref={cityRefs} />
            </Modal>
        </div >
    )

}