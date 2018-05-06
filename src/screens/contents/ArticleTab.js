import React, { Component } from 'react';
import styles from './ArticleTab.css';

function ArticleTab(props) {
    return (
        <content>
            <h3 className={styles.title}>{props.articleData.title}</h3>
            {props.articleData.id=='2_b'?(<Css2D/>):(<p className={styles.content}>{props.articleData.content}</p>)}
            
        </content>
    )
}

class Css2D extends React.Component{
    
    render(){
        return(
            <div className={styles.originalDiv}></div>
        )
    }

}
export default ArticleTab;