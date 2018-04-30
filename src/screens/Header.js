import React, { Component } from 'react';
import styles from './Header.css';
import Login from './Login';
import Logout from './Logout';

function HeaderMenu(props){
    const menus = props.menus;
    const menuItemList = menus.map((item)=>
        <li className={styles.headerMenuItem} key={item.id}>{item.title}</li>
    )
    return(
        <ul className={styles.headerMenu}>{menuItemList}</ul>
    )
}

const menuItems=[
    {id:'1',title:'Javascript'},
    {id:'2',title:'HTML+CSS'},
    {id:'3',title:'React'},
    {id:'4',title:'Aurelia'},
    {id:'5',title:'Pictures'}
    ];

function BlogTitle(props){
    return (
        <h1 className={styles.blogTitle}>{props.name}</h1>
    )
}

function LogInIcon(props){
    return (
        <div className={styles.logIn} onClick={props.showLogIn} title={props.value}></div>
    )
}

function LogOutIcon(props){
    return (
        <div className={styles.logOut} onClick={props.showLogOut} title={props.value}></div>
    )
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowLogin: false,
            isShowLogout:false
        }
        this.clickLogInHandle = this.clickLogInHandle.bind(this);
        this.clickLogOutHandle = this.clickLogOutHandle.bind(this);
    }
    clickLogInHandle() {
        this.setState({ isShowLogin: true });
    }
    clickLogOutHandle() {
        this.setState({ isShowLogout: true });
    }

    render() {
        return(
            <div className={styles.header}>
                <BlogTitle name="Jenny's Blog"/>
                <LogInIcon value='LogIn' showLogIn={this.clickLogInHandle}/>
                <Login isShow={this.state.isShowLogin} onClose={() => {this.setState({isShowLogin:false})}}/>
                <LogOutIcon value='LogOut' showLogOut={this.clickLogOutHandle}/>
                <Logout isShow={this.state.isShowLogout} onClose={() => {this.setState({isShowLogout:false})}}/>
                <HeaderMenu menus={menuItems}/>
            </div>
        )
    }
}
export default Header;
