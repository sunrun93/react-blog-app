import React, { Component } from 'react';
import styles from './Header.css';
import Login from './Login';

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
        <div className={styles.logOut} title={props.value}></div>
    )
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
        this.clickHandle = this.clickHandle.bind(this);
    }
    clickHandle() {
        this.setState({ isShow: true });
    }

    render() {
        return(
            <div className={styles.header}>
                <BlogTitle name=""/>
                <LogInIcon value='LogIn' showLogIn={this.clickHandle}/>
                <Login isShow={this.state.isShow} onClose={() => {this.setState({isShow:false})}}/>
                <LogOutIcon value='LogOut'/>
                <HeaderMenu menus={menuItems}/>
            </div>
        )
    }
}
export default Header;

// https://github.com/yanzixi/test/blob/master/app/conponent/Login.jsx