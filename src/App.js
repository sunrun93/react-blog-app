import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Header from './screens/Header';
import Nav from './screens/Nav';
import Content from './screens/Content'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
       <Header/>
       <Nav/>
       <Content/>
      </div>
    );
  }
}

export default App;
