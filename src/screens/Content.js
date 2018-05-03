import React, { Component } from 'react';
import styles from './Content.css';
import ArticleTab from './contents/ArticleTab';
import PictureTab from './contents/PictureTab';

let fakeData = require('../data.json');

let articleSummary = fakeData.navItemData;

function ContentDetail(props) {
    const isPicture = props.navSession == "5" ? true : false;
    return (
        <div className={styles.contentPane}>{isPicture ?
            (
                <PictureTab />
            ) : (
                <ArticleTab articleData={props.articleData} />
            )}
        </div>
    )
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleData: articleSummary[0].nav[0]
        };
    }
    componentWillReceiveProps(props) {
        let navId = props.navSession;
        let articleList = articleSummary.filter((list) => { return list.id == navId })[0].nav;
        let articleData;
        if (props.selectedNavItem == '') {
            articleData = articleList[0];
        } else {
            articleData = articleList.filter((article) => { return article.id == props.selectedNavItem })[0]
        }
        this.setState({
            articleData: articleData
        })
    }
    render() {
        return (
            <ContentDetail articleData={this.state.articleData} navSession={this.props.navSession} />
        )
    }
}
export default Content;
