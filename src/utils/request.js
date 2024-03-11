import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import ReactDOM from 'react-dom/client'
import { Spin } from 'antd'

const request = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})
//axios处理的是请求和响应 请求拦截器  响应拦截器

//请求拦截器
let requestCount = 0

const showLoading = () => {
    if (requestCount === 0) {
        const div = document.createElement('div')
        div.setAttribute('class', 'load')
        document.body.append(div)
        const render = ReactDOM.createRoot(div)
        render.render(
            <Spin size='large'></Spin>
        )
    }
    //请求继续
    requestCount++
}

request.interceptors.request.use(
    config => {
        //1发送网络请求，同时在页面显示loading
        //2 用户请求必须携带token
        //3 参数的序列化操作

        console.log('我的请求被拦截了，请指示')
        showLoading()
        return config
    }, err => {
        return err
    })
//响应拦截器
request.interceptors.response.use(
    res => {
        return res.data

    }, err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    console.log('请求错误')
                    break
                case 401:
                    console.log('未经授权')
                    break
                default:
                    console.log('其他错误')
            }
        }
        return err
    })

export default request