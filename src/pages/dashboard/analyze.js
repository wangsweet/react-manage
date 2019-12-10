import React, { Fragment, Component } from 'react';
import { Row, Col } from 'antd';
import Myecharts from "components/myecharts"
import Echarts from "components/echarts"

class Analyze extends Component {
    render() {
        return (
            <Fragment>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <Myecharts options={{
                            color:['#FFFFCC','#00CCFF'],
                            data:[{value:90},{value:160}],
                            formatter:this.handleformatter.bind(this,'注册量'),
                            id:"charts1"
                            }
                           
                            }></Myecharts>
                        </Col>
                        <Col className="gutter-row" span={6}>
                        <Myecharts options={{
                            color:['#33FFFF','#FF7AE4'],
                            data:[{value:100},{value:120}],
                            formatter:this.handleformatter.bind(this,'阅读量'),
                            id:"charts1"
                            }
                           
                            }></Myecharts>
                        </Col>
                        <Col className="gutter-row" span={6}>
                        <Myecharts options={{
                            color:['#FFCCFF','#33FFCC'],
                            data:[{value:80},{value:400}],
                            formatter:this.handleformatter.bind(this,'访问量'),
                            id:"charts1"
                            }
                           
                            }></Myecharts>
                        </Col>
                        <Col className="gutter-row" span={6}>
                        <Myecharts options={{
                            color:['#FFCCCC','#CCCCFF'],
                            data:[{value:200},{value:100}],
                            formatter:this.handleformatter.bind(this,'下载量'),
                            id:"charts1"
                            }
                           
                            }></Myecharts>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={24}>
                        <Echarts></Echarts>
                        </Col>
                    </Row>
            </Fragment>
        );
    }
    handleformatter(info){
        return info;
    }
}

export default Analyze;