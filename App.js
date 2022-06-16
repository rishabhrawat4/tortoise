import React, { Component } from 'react';
import {
  SafeAreaView
} from 'react-native';
import Index from './App/Index';
import { NativeBaseProvider } from 'native-base';
class App extends Component {

  render(){
    return (
      <NativeBaseProvider>
          <Index />
      </NativeBaseProvider>
      
    )
  }
  
};


export default App;
