import React from "react";
import { Container } from "./styled"
import echarts from "echarts";
class Echarts extends React.Component {
    render() {
       
        return (
            <Container ref="container"></Container>
        )
    }
    componentDidMount() {
        this.myEcharts = echarts.init(this.refs.container);
        var colors = ['#5793f3', '#d14a61', '#675bba'];

        //数据
        this.option = {
            color: colors,
        
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '20%'
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data:['注册量','阅读量','下载量']
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '注册量',
                    min: 0,
                    max: 250,
                    position: 'right',
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '阅读量',
                    min: 0,
                    max: 250,
                    position: 'right',
                    offset: 80,
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '下载量',
                    min: 0,
                    max: 25,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[2]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name:'注册量',
                    type:'bar',
                    data:[20, 49, 70, 22, 26, 77, 136, 162, 36, 20, 4, 3]
                },
                {
                    name:'阅读量',
                    type:'bar',
                    yAxisIndex: 1,
                    data:[6, 9, 0, 24, 27, 77, 176, 182, 47, 18, 0, 3]
                },
                {
                    name:'下载量',
                    type:'line',
                    yAxisIndex: 2,
                    data:[0, 2, 3, 5, 3, 12, 23, 24, 20, 15, 10, 2]
                }
            ]
        };
        
        
        //设置数据
        this.myEcharts.setOption(this.option)
       
    }
    
    
}


export default Echarts;