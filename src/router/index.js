import Home from '../pages/home'
import NotFound from '../pages/notFound'
import Ui from '../pages/ui'
import UButton from '../pages/ui/button'
import UModal from '../pages/ui/modal'
import ULoading from '../pages/ui/loading'
import Notification from '../pages/ui/notification'
import Message from '../pages/ui/message'
import Tab from '../pages/ui/tab'
import Gallery from '../pages/ui/gallery'
import UCarousel from '../pages/ui/carousel'
import FLogin from '../pages/form/login'
import FRegister from '../pages/form/register'
import Form from '../pages/form'
import Table from '../pages/table'
import TableBasic from '../pages/table/basic'
import TableHigh from '../pages/table/high'
//import RichText from '../pages/richText'
import City from '../pages/city'
import Order from '../pages/order'
import Detail from '../pages/order/detail'
import BikeMap from '../pages/map'
import Charts from '../pages/charts'
import Bar from '../pages/charts/bar'
import Pie from '../pages/charts/pie'
import Line from '../pages/charts/line'
import Permission from '../pages/permission'

const routes = [
    {
        path: '/',
        element: <Home />
    },

    {
        path: '/home',
        element: <Home />
    },

    //ui的路由

    {
        path: '/ui',
        element: <Ui />,
        // 子路由
        children: [
            {
                path: 'buttons',
                element: <UButton />
            },

            {
                path: 'modals',
                element: <UModal />
            },

            {
                path: 'loadings',
                element: <ULoading />
            },

            {
                path: 'notification',
                element: <Notification />
            },

            {
                path: 'messages',
                element: <Message />
            },

            {
                path: 'tabs',
                element: <Tab />
            },
            {
                path: 'gallery',
                element: <Gallery />
            },

            {
                path: 'carousel',
                element: <UCarousel />
            }
        ]

    },

    {
        path: '/form',
        element: <Form />,
        // 子路由
        children: [
            {
                path: 'login',
                element: <FLogin />
            },

            {
                path: 'register',
                element: <FRegister />
            },

        ]
    },

    {
        path: '/table',
        element: <Table />,
        // 子路由
        children: [
            {
                path: 'basic',
                element: <TableBasic />
            },

            {
                path: 'high',
                element: <TableHigh />
            },

        ]
    },

    // {
    //     path: '/richText',
    //     element: <RichText />
    // },

    {
        path: '/city',
        element: <City />
    },

    {
        path: '/detail',
        element: <Order />
    },
    {
        path: '/detail/:order_id',
        element: <Detail />
    },
    {
        path: '/BikeMap',
        element: <BikeMap />
    },
    {
        path: '/permission',
        element: <Permission />
    },



    {
        path: '/icons1',
        element: <Charts />,
        // 子路由
        children: [
            {
                path: 'barChart',
                element: <Bar />
            },

            {
                path: 'pieChart',
                element: <Pie />
            },
            {
                path: 'lineChart',
                element: <Line />
            },

        ]
    },


    {
        path: '/*',
        element: <NotFound />
    }

]

export default routes

// 子路由不带/ 以相对路径进行访问  button => UI/button
// 带上/ 以绝对路径进行访问 /button => 不带上父级路由