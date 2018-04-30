import React, { PropTypes, Component } from 'react';
import Dialog from './Dialog';
import styles from './Login.css';

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
        <Dialog width="300" height="240" isShow={isShow} onClose={this.props.onClose}>
            <div className={styles.loginForm}>
                <div className={styles.dialogTitle}>用户登陆</div>
                <div className={styles.loginInfo}>
                    <label className={styles.warningInfo}>{this.state.info}</label>
                    <label className={styles.loginLabel}>用户名</label>
                    <input className={styles.loginInput} type="text" placeholder="手机号/邮箱" onChange={this.changeText.bind(this)} /><br/>
                    <label className={styles.loginLabel}>密码</label>
                    <input className={styles.loginInput} type="password" placeholder="密码" onChange={this.changePassword.bind(this)}/><br/>
                    <label className={styles.loginLabel}>确认密码</label>
                    <input className={styles.loginInput} type="password" placeholder="请再次输入密码" onChange={this.changerePassword.bind(this)}/><br/>
                    <button className={styles.loginBtn} onClick={this.clickHandle.bind(this)}>登 录</button>
                </div>
            </div>
        </Dialog>
    )}

}
Login.defaultProps={
    isShow:false
}
export default Login;