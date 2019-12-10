import React from "react";
import { Container } from "./styled"
import echarts from "echarts";
class Myecharts extends React.Component {
    render() {
       
        return (
            <Container ref="container"></Container>
        )
    }
    componentDidMount() {
        this.myEcharts = echarts.init(this.refs.container);
        
        //数据
        this.option = {
            //数据配置
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize: '20',
                                color:"#66CCFF"
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                }
            ]
        };

       

        this.option.color = this.props.options.color;
        this.option.series[0].data = this.props.options.data;
        this.option.series[0].label.normal.formatter = this.props.options.formatter;
        //设置数据
        this.myEcharts.setOption(this.option)
       
    }
    
    
}


export default Myecharts;