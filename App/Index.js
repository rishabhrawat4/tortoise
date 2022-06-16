import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import styles from './Style/indexStyle';
import Header from './Component/Header';

export default class Index extends React.Component {

  render(){
    return (
        <View style={styles.container}>
          <ScrollView>
            <Header 
              name="Rahul Kumar"
            />
          </ScrollView>
        </View>
    )
  }
}