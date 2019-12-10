import React, { Component } from 'react'
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
import {Table,Switch} from "antd"
import moment from "moment";
@connect(mapStateToProps,mapDispatchToProps)
class Usercontent extends Component {
    constructor(){
        super();
        this.state = {
            columns:[
                {
                    title:"用户账号",
                    dataIndex:"username",
                    key:"username"
                },
                {
                    title:"用户昵称",
                    dataIndex:"name",
                    key:"name"
                },
                {
                    title:"用户头像",
                    dataIndex:"urlPic",
                    key:"urlPic",
                    render:url=><img src={url} style={{width:45,height:45}}/>
                },
                {
                    title:"用户状态",
                    dataIndex:"status",
                    key:"status",
                    render:(flag,item)=><Switch 
                        checkedChildren="开" 
                        unCheckedChildren="关" 
                        defaultChecked={flag}
                        onChange={this.handleAuth.bind(this,item)}
                        />
                },
                {
                    title:"注册时间",
                    dataIndex:"registerTime",
                    key:"registerTime",
                    render:text=><p>{moment(text).format('YYYY-MM-DD HH:MM:SS')}</p>
                }
            ]
        }
    }
    handleAuth(...rest){
        console.log(rest)
    }
    render() {
        let {columns} = this.state
        return (
            <div>
               <Table 
                    rowKey={item=>item._id}
                    columns={columns} 
                    dataSource={this.props.userList}/>
            </div>
        )
    }
    componentDidMount(){
        if(!sessionStorage.getItem("userList")){
            this.props.handleUserList()
        }
    }
}
export default Usercontent;