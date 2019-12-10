import React from "react";
import {UploadContainer} from "./styled"
import {Icon,message} from "antd";
import {fetch as fetchPro} from "whatwg-fetch"
class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgUrl:""
        }

       if(this.props.value){
           this.state.imgUrl = this.props.value
       }
    }
    render(){
        let {imgUrl} = this.state;
        return (
            <UploadContainer>
                <input type="file" onChange={this.handleUpdate.bind(this)} ref="files"/>
                <div className="imgContent">
                   {imgUrl? <img src={imgUrl}/>:<Icon type="plus" style={{fontSize:26}}/>}
                </div>
            </UploadContainer>
        )
    }
    async handleUpdate(){
        let file = this.refs.files.files[0];
        let formData = new FormData();
        formData.append("filesImg",file);

        let data = await fetchPro("/ajax/upload/files",{
            method:"post",
            body:formData
        }).then((res)=>res.json());

        if(data.data.urlPath){
            this.setState({
                imgUrl:data.data.urlPath
            },()=>{
               this.props.onChange(data.data.urlPath)
            })
        }else{
            message.error(data.data.info)
        }
    }
}

export default Upload;