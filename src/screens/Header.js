import React, { Component } from 'react';
import styles from './Header.css';

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

class Header extends React.Component{
    render(){
        return(
            <div className={styles.header}>
                <BlogTitle name="Jenny's Blog"/>
                <HeaderMenu menus={menuItems}/>
            </div>
        )
    }
}
export default Header;