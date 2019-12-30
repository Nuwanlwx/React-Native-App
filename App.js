/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View,Button} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  state = {
    placeName: '',
    places:[ ]
  }
  placeNameChangedHandler = val =>{
   this.setState({
    placeName: val
    });
  }
  placeSubmitHandler = ()=>{
    if(this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState =>{
      return {
        places:prevState.places.concat(prevState.placeName)
      };
    });
  };
  render() {
    const placeOutput = this.state.places.map((place ,i)=>(
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.placeInput}
          // style={{width:300}}
          value={this.state.placeName} onChangeText={this.placeNameChangedHandler}/>
          <Button
          style={styles.placeButton}
            title="Add"
            color="#841584"
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>
          {placeOutput}
        </View>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>Some thing Changed.To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }, 
  inputContainer: {
    // flex: 1,
    width:"100%",
    flexDirection:"row",
    padding:20,
    justifyContent: 'space-between',
    alignItems:"center"
  },
  placeInput:{
    width:"70%"
  }, 
  placeButton:{
    width:"30%"
  }, 
  listContainer:{
    width:"100%",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
