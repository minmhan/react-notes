/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SimpleButton from './app/components/SimpleButton';
import NoteScreen from './app/components/NoteScreen';
import HomeScreen from './app/components/HomeScreen';

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState){
    switch(route.name){
      case 'home':
        return(
          <SimpleButton 
            onPress={()=> {
              navigator.push({name:'createNote'}); 
            }} 
            customText='Create Note'
            style={styles.navBarRightButton}
            textStyle={styles.navBarButtonText}>
          </SimpleButton>);
      default:
        return null;
    }
  },
  RightButton: function(route, navigator, index, navState){
    switch(route.name){
      case 'createNote':
        return(
          <SimpleButton onPress={()=> {
            navigator.pop(); }} 
            customText='Back'
            style={styles.navBarLeftButton}
            textStyle={styles.navBarButtonText}>
          </SimpleButton>);
      default:
        return null;
    }
  },
  Title: function(route, navigator, index, navState){
    switch(route.name){
      case 'home':
        return(<Text style={styles.navBarTitleText}>React Note</Text>);
      case 'createNote':
        return(<Text style={styles.navBarTitleText}>Create Note</Text>);
    }
  }
};

export default class ReactNotes extends Component {
  renderScene(route, navigator){
    switch(route.name){
      case 'home':
        return(<HomeScreen navigator={navigator} />);
      case 'createNote':
        return(<NoteScreen />);
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{ name:'home' }} 
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar 
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar} />
        } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navContainer:{
    flex:1
  },
  navBar: {
    backgroundColor:'#5B29C1',
    borderBottomColor:'#48209A',
    borderBottomWidth:1
  },
  navBarTitleText: {
    color:'white',
    fontSize:16,
    fontWeight:'500',
    marginVertical:16
  },
  navBarLeftButton:{
    paddingLeft:10
  },
  navBarRightButton:{
    paddingRight:10
  },
  navBarButtonText:{
    color:'#EEE',
    fontSize:16,
    marginVertical:16
  }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
