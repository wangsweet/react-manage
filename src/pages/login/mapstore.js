import { loginAsyncAction } from "actions/login/loginCreator"
import {message} from "antd";

export const mapStateToProps = (state) => ({

})


export const mapDispatchToProps = (dispatch) => ({
    handleLogin(e) {
        e.preventDefault();
        this.props.form.validateFields( async (err, values) => {
           
            if (!err) {
               //reduxThunk的返回值是一个promise
              let data = await dispatch(loginAsyncAction(values.username,values.password));
              if(data == 1){
                setTimeout(()=>{
                    this.props.history.push("/home")
                },1500)
              }
            }else{
                message.error('用户名或密码错误')
            }
        });
    }
})