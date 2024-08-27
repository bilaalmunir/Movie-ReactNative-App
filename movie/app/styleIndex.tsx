import {StyleSheet} from 'react-native'

export const styleIndex = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'yellow'
    },
    searchBarContainer: {
      flex:0.1,
      backgroundColor:'blue'
    },
    inContainerUp:{
        flex:0.4,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'orange',
    },
    inContainerDown:{
        flex:0.5,
        backgroundColor:'red'
    }
  });