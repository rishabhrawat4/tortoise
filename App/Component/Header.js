import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from '../Style/HeaderStyle';
import PropTypes from 'prop-types'; 
export default class Header extends React.Component{

  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: "N/A"
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Text style={styles.subTitle}>Welcome back,</Text>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
        <View style={styles.rightView}>
          <Image 
            source={require("../Images/tortoiseLogo.png")}
            style={styles.logo}
          />
        </View>
      </View>
    )
  }
}