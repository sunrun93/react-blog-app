import React, { Component } from 'react';
import styles from './Header.css';
import Login from './Login';
import Logout from './Logout';

let fakedate = require('../data.json');

let menuItems = fakedate.headerMenus;

function HeaderMenu(props){
    const menus = props.menus;
    const selectedId = props.selectedIndex;
    const menuItemList = menus.map((item)=>
        <li className={(selectedId==item.id)?styles.selectedHeaderMenuItem:styles.headerMenuItem} 
        key={item.id} onClick={props.navItemClick.bind(item,item.id)}>{item.title}</li>
    )
    return(
        <ul className={styles.headerMenu}>{menuItemList}</ul>
    )
}

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
                <BlogTitle name="Blog"/>
                <LogInIcon value='LogIn' showLogIn={this.clickLogInHandle}/>
                <Login isShow={this.state.isShowLogin} onClose={() => {this.setState({isShowLogin:false})}}/>
                <LogOutIcon value='LogOut' showLogOut={this.clickLogOutHandle}/>
                <Logout isShow={this.state.isShowLogout} onClose={() => {this.setState({isShowLogout:false})}}/>
                <HeaderMenu menus={menuItems} selectedIndex={this.props.selectedTitleId} navItemClick={this.props.titleClick}/>
            </div>
        )
    }
}
export default Header;
