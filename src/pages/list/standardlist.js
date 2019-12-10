import React, { Component } from 'react'
import { Table,Button,Modal,message} from 'antd';
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
import ModifyBooks from "components/modifyBooks"
import {booksListDel} from "api/books"


@connect(mapStateToProps,mapDispatchToProps)
class Standardlist extends Component {
    constructor(){
        super();
        this.state = {
            isShow:false,
            modifyData:{},
            columns:[
                {
                    title:"书籍作者",
                    dataIndex:"booksAuth",
                    key:"booksAuth",
                    width:150,
                },
                {
                    title:"书籍名称",
                    dataIndex:"booksName",
                    key:"booksName",
                    render:text=><a>{text}</a>,
                   
                },
                {
                    title:"书籍封面",
                    dataIndex:"booksLogo",
                    key:"booksLogo",
                    render:url=><img src={url} style={{width:'80px',height:'120px'}}/>,
                    
                },
                {
                    title:"书籍状态",
                    dataIndex:"booksStatus",
                    key:"booksStatus",
                   
                },
                {
                    title:"书籍价格",
                    dataIndex:"booksPrice",
                    key:"booksPrice",
                   
                },
                {
                    title:"操作",
                    render:(item)=>(
                        <div>
                            <Button type="link" onClick={this.handleDel.bind(this,item)}>删除</Button>
                            <Button type="link" onClick={this.handleisShow.bind(this,item)}>编辑</Button>
                        </div>
                    )
                }
            ]
        }
    }
    render() {
        let data = this.props.booksList;
        console.log(this.props.booksList)
        let {columns} = this.state;
        return (
            <div>
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    rowKey={item=>item._id}
                    pagination={{
                        pageSize:10,
                        total:100,
                        onChange:this.handleonChange.bind(this)
                    }}
                    />
                    <Modal
                         title="书籍编辑"
                         visible={this.state.isShow}
                         footer={null}
                         onCancel={this.handleHide.bind(this)}
                    >
                        <ModifyBooks modifyData={this.state.modifyData} handleSucc={this.handleSuccBooks.bind(this)}/>
                    </Modal>
            </div>
        )
    }
    handleHide(){
        this.setState({
            isShow:false
        })
    }
    handleDel(item){
        Modal.info({
            content:`您确定要删除${item.booksName}这本吗?`,
            onOk: async ()=>{
                let data = await booksListDel(item._id);
                if(data.data.status == 1){
                    message.success(data.data.info);
                    this.props.handleGetBooksList(this.page,this.limit);
                }else{
                    message.error(data.data.info)
                }
            },
            maskClosable:true,
           
        })
    }
    handleSuccBooks(){
        this.setState({
            isShow:false
        },()=>{
            this.props.handleGetBooksList(this.page,this.limit);
        })
    }
    handleisShow(data){
       
        this.setState({
            isShow:true,
            modifyData:data
        })
    }
    handleonChange(page,limit){
        this.page = page;
        this.limit = limit;
        this.props.handleGetBooksList(page,limit);
    }
    componentDidMount(){
        this.props.handleGetBooksList(1,10);
    }
}

export default Standardlist;