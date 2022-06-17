import { StyleSheet } from 'react-native';
import { Colors } from "../Themes";

export default StyleSheet.create({
  container: {
    // flex: 1,
    // borderWidth: 2,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  leftView: {
    flex: 1,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'sans-serif-medium',
    color: Colors.title,
    opacity: 0.65
  },
  title: {
    fontSize: 28,
    color: Colors.title,
    fontFamily: 'sans-serif-medium',
    fontWeight: '600'
  },
  rightView: {
    // borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteBackground,
    elevation: 20,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 1
  },
  logo: {
    height: 40,
    width: 40,
    shadowColor: Colors.shadow
  }
})