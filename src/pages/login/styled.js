import styled from "styled-components"
import bg from "../../static/bg.jpeg"

export const LoginContainer = styled.div`
        width:100%;
        height:100%;
        overflow:hidden;
        background-image:url(${bg});
        background-size:cover;
        display:flex;
        justify-content:center;
        align-items:center;
        .loginContent{
            width:340px;
            height:380px;
            background:rgba(255,255,255,.5);
            padding:10px;
            border-radius:10px;
        }
        .ant-form-item{
            margin-bottom:0;
        }
        .loginBtn{
            margin-top:20px;
        }
        .logo{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-top:15px;
        }
`