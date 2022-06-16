import { StyleSheet } from 'react-native';
import { Colors } from "../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    margin: 10,
    // alignItems: 'center',
    overflow: 'hidden',
    elevation: 10,
    zIndex: 99,
    shadowColor: Colors.shadow,
    backgroundColor: 'white'
  },
  imageStyle: {
    width: '100%',
    height: 200, 
    alignSelf: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    color: 'black',
    borderWidth: 1,
  },
  detailView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subTitle: {
    color: Colors.subTitle,
    opacity: 0.65,
    fontSize: 12,
    fontWeight: 'bold'
  },
  title: {
    color: Colors.title,
    fontSize: 23,
    fontWeight: '700'
  },
  highlightText: {
    color: Colors.highlight
  },
  descContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  descView: {
    marginBottom: 20,
    alignItems: 'center',
  },
  descImageBackground: {
    backgroundColor: Colors.background,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 4,
  },
  descImage: {
    width: 70,
    height: 50,
    
  },
  descText: {
    color: Colors.subTitle,
    fontSize: 12,
    fontWeight: '600'
  }
})