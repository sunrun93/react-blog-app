import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Header from './screens/Header';
import Nav from './screens/Nav';
import Content from './screens/Content';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      session:'1', //selected menu item in header
      showPicture:false,
      navItemId:""
    };
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }
  handleTitleClick(titleId){
    console.log(titleId);
    this.setState({
      session: titleId,
      showPicture: titleId == "5" ? true : false
    })
  }
  handleNavItemClick(navItemId){
     this.setState({
      navItemId:navItemId
    })
  }
  render() {
    return (
      <div className={styles.app}>
        <Header titleClick={this.handleTitleClick} selectedTitleId={this.state.session} />
        <Nav navItemClick={this.handleNavItemClick} navSession={this.state.session} />
        <Content isPicture={this.state.showPicture} navSession={this.state.session} selectedNavItem={this.state.navItemId}/>
      </div>
    );
  }
}

export default App;
