import React from "react";
import { Form, Input, Button,Select,message} from "antd";
import Upload from "components/upload"
import {booksListUpdate} from "api/books"
const { Option } = Select;
@Form.create()
class ModifyBooks extends React.Component {
    render() {
        let { modifyData } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Item>
                    {
                        getFieldDecorator('booksAuth',{
                            initialValue:modifyData.booksAuth
                        })(
                            <Input type="text" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('booksName',{
                            initialValue:modifyData.booksName
                        })(
                            <Input type="text" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('booksPrice',{
                            initialValue:modifyData.booksPrice
                        })(
                            <Input type="number" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('booksStatus',{
                            initialValue:modifyData.booksStatus
                        })(
                            <Select>
                                <Option value="连载中">连载中</Option>
                                <Option value="已完结">已完结</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('booksLogo',{
                            initialValue:modifyData.booksLogo
                        })(
                           <Upload/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">修改</Button>
                </Form.Item>
            </Form>
        )
    }
    handleSubmit(e){
        e.preventDefault();
        
        this.props.form.validateFields( async (err,values)=>{
            if(!err){
                let { modifyData } = this.props;
                let id = modifyData._id;
                let data = await booksListUpdate(id,values.booksAuth,values.booksName,values.booksPrice,values.booksStatus,values.booksLogo)
               if(data.data.status == 1){
                message.success(data.data.info,1.5);

                setTimeout(()=>{
                    this.props.handleSucc();
                },1500)
               }else{
                     message.error(data.data.info)
               }
            }
        })
    }
}

export default ModifyBooks;