import React, { Component } from 'react';
import Dialog from './Dialog';
import styles from './Logout.css';

class Logout extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const isShow = this.props.isShow;
        return (
            <Dialog width="300" height="160" isShow={isShow} onClose={this.props.onClose}>
                <div className={styles.loginForm}>
                    <div className={styles.dialogTitle}>用户退出</div>
                    <div className={styles.loginInfo}>
                        <label className={styles.loginLabel}>您已退出成功</label>
                    </div>
                    <button className={styles.okBtn} onClick={this.props.onClose}>OK</button>
                </div>
            </Dialog>
        )
    }
}
export default Logout;