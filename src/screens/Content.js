import React, { Component } from 'react';
import styles from './Content.css';
import ArticleTab from './contents/ArticleTab';
import PictureTab from './contents/PictureTab';

let fakeData = require('../data.json');

let articleData = fakeData.navItemData;


class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const isPicture = this.props.isPicture;
        return(
            <div>{isPicture?
                (<PictureTab/>):(<ArticleTab/>)}
            </div>
        )
    }
}
export default Content;
