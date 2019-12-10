import React, {Component } from 'react';
import {LoginContainer} from "./styled"
import{Form,Input,Button} from "antd";
import logo from "static/manage.png"
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
@Form.create()

class Login extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <LoginContainer>
                <div className="loginContent">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <Form onSubmit={this.props.handleLogin.bind(this)}>
                        <Form.Item label="用户名">
                            {
                                getFieldDecorator('username',{
                                    //初始值  数据校验等工作
                                    rules:[
                                        {required:true,message:"用户名称必须填写"},
                                        {pattern:/\w{2,8}$/,message:"用户名填不规范"}
                                    ],
                                    initialValue:'ws',
                                })(
                                   <Input type="text"/>
                                )
                            }
                            
                        </Form.Item>
                       
                        <Form.Item label="密码">
                          {
                                getFieldDecorator('password',{
                                    rules:[
                                        {required:true,message:"密码必须填写"},
                                        {
                                            pattern:/\w{2,8}/,message:"密码填不规范"
                                        }
                                    ],
                                    initialValue:"ws"
                                })(
                                    <Input type="password"/>
                                )
                          }
                        </Form.Item>
                        <div style={{marginTop:"10px"}} onClick={this.handleRegiste.bind(this)}>没有账号，立即注册</div>
                        <Form.Item className="loginBtn">
                            <Button type="primary" block htmlType="submit">登陆</Button>
                        </Form.Item>
                    </Form>
                </div>
            </LoginContainer>
        );
    }
    handleRegiste(){
        this.props.history.push("/registe")
    }
}
export default Login;