const Koa = require('koa');
const Router = require('koa-router');
const Mock = require('mockjs')
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

router.prefix('/api')

const user = Mock.mock({
    "order_detail": [
        {
            order_sn: "202303090001",
            bike_sn: "B001",
            user_name: "John Doe",
            mobile: "1234567890",
            distance: 15000,
            total_time: "2 hours",
            status: 1,
            start_time: "2023-03-09 10:00 AM",
            end_time: "2023-03-09 12:00 PM",
            total_fee: 20.50,
            user_pay: 18.00
        },
        {
            order_sn: "202303090002",
            bike_sn: "B002",
            user_name: "Jane Smith",
            mobile: "9876543210",
            distance: 20000,
            total_time: "3 hours",
            status: 2,
            start_time: "2023-04-15 09:30 AM",
            end_time: "2023-04-15 12:30 PM",
            total_fee: 25.00,
            user_pay: 22.50
        },
        {
            order_sn: "202303090003",
            bike_sn: "B003",
            user_name: "Robert Johnson",
            mobile: "5551234567",
            distance: 18000,
            total_time: "2.5 hours",
            status: 1,
            start_time: "2023-05-22 11:45 AM",
            end_time: "2023-05-22 02:15 PM",
            total_fee: 22.00,
            user_pay: 20.00
        },
        {
            order_sn: "202303090004",
            bike_sn: "B004",
            user_name: "Emily Davis",
            mobile: "9998887777",
            distance: 25000,
            total_time: "4 hours",
            status: 1,
            start_time: "2023-06-30 10:15 AM",
            end_time: "2023-06-30 02:15 PM",
            total_fee: 30.00,
            user_pay: 27.50
        },
        {
            order_sn: "202303090005",
            bike_sn: "B005",
            user_name: "Michael Brown",
            mobile: "6665554444",
            distance: 22000,
            total_time: "3 hours",
            status: 2,
            start_time: "2023-07-15 09:30 AM",
            end_time: "2023-07-15 12:30 PM",
            total_fee: 27.50,
            user_pay: 25.00
        }
    ]
})

// 使用中间件
app.use(bodyParser());
app.use(cors());

// 路由定义
router.get('/', async (ctx) => {
    ctx.body = {
        status: 200,
        user
    }
});


router.get('/202303090001', async (ctx) => {
    ctx.body = {
        status: 200,
        user: {
            order_detail: [user.order_detail[0]]
        }
    }

});

router.get('/202303090002', async (ctx) => {
    ctx.body = {
        status: 200,
        user: {
            order_detail: [user.order_detail[1]]
        }
    }
});

router.get('/202303090003', async (ctx) => {
    ctx.body = {
        status: 200,
        user: {
            order_detail: [user.order_detail[2]]
        }
    }
});

router.get('/202303090004', async (ctx) => {
    ctx.body = {
        status: 200,
        user: {
            order_detail: [user.order_detail[3]]
        }
    }
});

router.get('/202303090005', async (ctx) => {
    ctx.body = {
        status: 200,
        user: {
            order_detail: [user.order_detail[4]]
        }
    }
});

// 使用路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 启动服务器
const port = 5003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
