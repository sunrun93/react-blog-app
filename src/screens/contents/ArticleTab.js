import React, { Component } from 'react';
import styles from './ArticleTab.css';

function ArticleTab(props){
    return (
            <content>
                <h3 className={styles.title}>{props.articleData.title}</h3>
                <p className={styles.content}>{props.articleData.content}</p>
            </content>
        )

}

export default ArticleTab;