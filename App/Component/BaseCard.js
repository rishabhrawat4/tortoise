import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import {
  Icon
} from 'native-base';
import styles from '../Style/BaseCardStyle';
import PropTypes from 'prop-types'; 

export default class BaseCard extends React.Component{

  static propTypes = {
    list: PropTypes.array
  }

  static defaultProps = {
    list: []
  }

  renderItem = (item) => (
    <View style={styles.container}>
      <View>
        <Image 
          source={item.imageUri}
          style={styles.imageStyle}
        />
        <Icon 
          name={"sound"}
          type={'AntDesign'}
          style={styles.icon}
        />
      </View>
      <View style={styles.detailView}>
      <Icon 
          name={"ios-add-circle"}
          // type={'AntDesign'}
          style={styles.icon}
        />
        <Text style={styles.subTitle}>{item.subTitle.toUpperCase()}</Text>
        <Text style={styles.title}>{item.title}<Text style={styles.highlightText}>{item.higlightTitle}</Text></Text>
      </View>
      <View style={styles.descContainer}>
      {item.desc && item.desc.map(descItem => (
        <View style={styles.descView}>
          <View style={styles.descImageBackground}>
          <Image 
            style={styles.descImage}
            source={descItem.image}
          />
          </View>
          <Text style={styles.descText}>{descItem.name}</Text>
        </View>
      ))}
      </View>
    </View>
  )

  render(){
    return (
      // 
      <FlatList
        data={this.props.list}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={(item, index) => "key"+item.id}
      />
    )
  }
}