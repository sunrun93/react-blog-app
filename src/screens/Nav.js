import React, { Component } from 'react';
import styles from './Nav.css';
let fakedate = require('../data.json');

let navItemData = fakedate.navItemData;

function NavigationTree(props){
    const navItems = props.navItemData;
    const navItem = navItems.map((item)=>
        <li key={item.id}  className={styles.navItem} onClick={props.navItemClick.bind(item,item.id)}>{item.title}</li>
    )
    return(
        <ul>{navItem}</ul>
    )
}

class Nav extends React.Component{
    constructor(props){
        super(props);
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
    render(){
        return(
            <div className={styles.nav}>
                <h3 className={styles.navTitle}>{this.state.navTitle}</h3>
                <NavigationTree navItemData={this.state.currentNavItems} navItemClick={this.props.navItemClick}/>
            </div>
        )
    }
}




export default Nav;
