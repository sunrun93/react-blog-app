import React, { Component } from 'react';
import styles from './Nav.css';
let fakedate = require('../data.json');

let navItemData = fakedate.navItemData;

function NavigationTree(props){
    const navItems = props.navItemData;
    const navItem = navItems.map((item)=>
        <li key={item.conId}  className={styles.navItem} onClick={props.navItemClick.bind(item,item.conId)}>{item.content}</li>
    )
    return(
        <ul>{navItem}</ul>
    )
}

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.handleNavItemClick = this.handleNavItemClick.bind(this);
        this.state={
            currentNavItems:navItemData[0].nav,
            navTitle:navItemData[0].title
        }
    }
    componentWillReceiveProps(props){
        console.log(props.navSession);
        const navData = navItemData.filter((item)=>{return item.id == props.navSession})[0];
        this.setState({
            currentNavItems:navData.nav,
            navTitle:navData.title
        })
    }
    handleNavItemClick(id){
        console.log(id);
    }
    render(){
        return(
            <div className={styles.nav}>
                <h3 className={styles.navTitle}>{this.state.navTitle}</h3>
                <NavigationTree navItemData={this.state.currentNavItems} navItemClick={this.handleNavItemClick}/>
            </div>
        )
    }
}




export default Nav;
