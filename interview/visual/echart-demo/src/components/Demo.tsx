import React ,{useEffect,useRef} from 'react'
import * as echarts from 'echarts'

const Demo : React.FC=()=>{
    //可变对象
    //ts 类型约束让代码更严谨
    const chartRef =useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if(chartRef.current){
            //初始化Echarts 实例
            const myChart=echarts.init(chartRef.current);
            const options={
                title:{
                    text:'皮大公司财报'
                },
                tooltip:{},
                legend:{
                    data:['销量']
                },
                series:[{
                    name:'销量',
                    type:'pie',//饼状图
                    data:[
                        {value:335,name:'直接访问'},
                        {value:310,name:'邮件营销'},
                        {value:234,name:'联盟广告'},
                        {value:135,name:'视频广告'},
                        {value:1548,name:'搜索引擎'},
                    ]
                }]
            };
            //使用配置项和数据显示图表
            myChart.setOption(options);
        }
    },[])
    return (
        < div ref={chartRef}
        style={{width:'600px',height:'400px'}}/>
    )
}
export default Demo
