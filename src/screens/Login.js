import React, { PropTypes, Component } from 'react';
import Dialog from './Dialog';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            password: "",
            repassword: "",
            info: ""
        }
    }
    changeText(event){
        this.setState({textInput:event.target.value})

    }
    changePassword(event){
        this.setState({password:event.target.value})

    }
    changerePassword(event){
        this.setState({repassword:event.target.value})

    }

    clickHandle(){
        var inputValue = this.state.textInput;
        var password = this.state.password;
        var repassword = this.state.repassword;
        var reg = /^1\d{10}$/;
        var reg2 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if(password == '' || repassword == ''){
            this.setState({info:'用户名或者密码不能为空'})
        }else if (!reg2.test(inputValue)&&!reg.test(inputValue)){
            this.setState({info:'用户名格式错误'})
        }else if (password != repassword){

            this.setState({info:'两次输入密码不一致'})
        }
    }
    render(){
        const isShow = this.props.isShow;
        return (
        <Dialog width="400" height="440" isShow={isShow} onClose={this.props.onClose}>
            <div className="loginForm">
                <div className="loginLogo"><img src="../conponent/images/logo.png"/></div>
                <div className="loginText">
                    <label style={{color:'#FF0000',fontSize:'10px'}}>{this.state.info}</label>
                    <input type="text" placeholder="手机号/邮箱" onChange={this.changeText.bind(this)} /><br/>
                    <input type="password" placeholder="密码" onChange={this.changePassword.bind(this)}/><br/>
                    <input type="password" placeholder="请再次输入密码" onChange={this.changerePassword.bind(this)}/><br/>
                    <span className="loginBtn" onClick={this.clickHandle.bind(this)}>登录</span>
                </div>
            </div>
        </Dialog>
    )}

}
Login.defaultProps={
    isShow:false
}
export default Login;