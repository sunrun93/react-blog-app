import React, { PropTypes, Component } from 'react'
import styles from './Dialog.css';

export default class Dialog extends React.Component{
    constructor(props) {
        super(props);
    }
    onCloseHandler(){
        this.props.onClose();
    }
    renderTitle(){
        const {title,titlePosition}=this.props;
        if(title){
            <div className={styles.titleText}>{title}</div>
        }
    }
    renderContent(){
        const{content} = this.props
    }
    render(){
        const { width, height } = this.props;
        let marginTop = -height / 2;
        let marginLeft = -width / 2;
        return (this.props.isShow &&
            <div className={styles.dialog}>
                <div className={styles.dialogContent} style={{ width: width + 'px', height: height + 'px', marginTop: marginTop + 'px', marginLeft: marginLeft + 'px' }}>
                    <div className={styles.dialogClose} onClick={this.onCloseHandler.bind(this)}></div>
                    {this.renderTitle()}
                    {this.props.children}
                </div>
            </div>
        )
    }
}
Dialog.defaultProps = {
    width:550,
    height:500
};