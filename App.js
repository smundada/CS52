import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,} from 'native-base';

import Homescreen from './index';
import SearchBarPage from './SearchBarPage';
import CheckListPage from './CheckListPage';
import FeelingsPage from './FeelingsPage';
import IntroductionPage from './IntroductionPage';
import ResourcesPage from './ResourcesPage';
//import Splash from './Splash';


export default class App extends Component {
  render() {
    return (
      <Container>

      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
        <Scene key="root">
          <Scene key="home" component={Homescreen} title="Mango Help      " initial={true}/>
          <Scene key="checklist" component={CheckListPage} title="Mango Help    "/>
          <Scene key="search" component={SearchBarPage} title="Mango Help   " />
          <Scene key="feelings" component={FeelingsPage} title="Mango Help  " />
          <Scene key="intro" component={IntroductionPage} title="Mango Help " />
          <Scene key="resources" component={ResourcesPage} title="Mango Help     " />
        </Scene>
      </Router>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
      backgroundColor:'#EF820D'
  },
  navBarTitle:{
      color:'#FFFFFF'
  },
});
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
