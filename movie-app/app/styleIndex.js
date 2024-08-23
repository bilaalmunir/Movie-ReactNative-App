import {StyleSheet} from 'react-native'

export const styleIndex = StyleSheet.create({
    container: {
      flex:1,
    //   backgroundColor:'yellow'
    },
    inContainerUp:{
        flex:0.6,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue'
    },
    inContainerDown:{
        flex:0.4,
        backgroundColor:'red'
    }
  });