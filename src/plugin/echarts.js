//按需导入
// 1. 引入echarts的核心模块 提供了echarts使用时必须的接口
import * as echarts from 'echarts/core'

//2.引入项目需要的图标 柱状图，饼图，折线图
import {
    BarChart,
    PieChart,
    LineChart
} from 'echarts/charts'

//3.引入提示框，标题，直角坐标系组件 后缀都是Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components'

//4.引入一个渲染器 canvas syg  echarts实现按需导入的时候不提供任何的渲染器的
//所以要自己导入  数据量不大 canvas syg都可；如果存在交互比较多的时候，推荐canvas

import { CanvasRenderer } from 'echarts/renderers'

//5. 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    PieChart,
    LineChart,
    CanvasRenderer
])

export default echarts