import React, {Component} from 'react';
import {View,Button,StyleSheet, TextInput} from 'react-native';
  class PlaceInput extends Component  {
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
        this.props.onPlaceAdded(this.state.placeName);
      }; 
      render () {
        return (
            <View style={styles.inputContainer}>
              <TextInput
              style={styles.placeInput}
              // style={{width:300}}
              
              value={this.state.placeName} onChangeText={this.placeNameChangedHandler}
              />
              <Button
              style={styles.placeButton}
                title="Add"
                color="#841584"
                onPress={this.placeSubmitHandler}
              />
            </View>
        );
      };
  }


const styles = StyleSheet.create({
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
});
  export default PlaceInput;