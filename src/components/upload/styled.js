import styled from "styled-components"

export const UploadContainer = styled.div`
    width:110px;
    height:110px;
    border:1px dashed #ccc;
    position:relative;
    input{
        opacity:0;
        width:110px;
        height:100%;
        position:absolute;
        left:0;
        top:0;
        z-index:2;
    }
    .imgContent{
        padding:5px;
        width:100%;
        height:100%;
        position:absolute;
        left:0;
        top:0;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            width:100%;
            height:100%;
        }
    }

`