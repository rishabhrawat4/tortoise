import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import styles from './Style/indexStyle';
import Header from './Component/Header';
import BaseCard from './Component/BaseCard';
export default class Index extends React.Component {
  
  constructor(props){
    super(props);
    this.list = [
      {
        id: 1,
        subTitle: "Iphone Savings Plan",
        title: "Save up for the next Iphone and ",
        higlightTitle: "get 10% Cashback",
        imageUri: require('./Images/iphone.jpg'),
        desc: [
          {
            image: require('./Images/truck.jpg'),
            name: 'Priority Delivery'
          },
          {
            image: require('./Images/charger.jpg'),
            name: 'Free Charger',
          },
          {
            image: require('./Images/giftBox.jpg'),
            name: 'Tortoise Merch'
          }
        ]
      },
      {
        id: 2,
        subTitle: "Make my trip Savings Plan",
        title: "Save up for the next Vacation and ",
        higlightTitle: "get 10% Cashback",
        imageUri: require('./Images/sea.jpg'),

      }
    ]
  }

  render(){
    return (
        <View style={styles.container}>
          {/* <ScrollView> */}
            <Header 
              name="Rahul Kumar"
            />
            <BaseCard 
              list={this.list}
            />
          {/* </ScrollView> */}
        </View>
    )
  }
}