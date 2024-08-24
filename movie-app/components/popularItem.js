import {View,useWindowDimensions,Text,StyleSheet} from 'react-native';


function PopularItem({item}) {
    console.log('it came here')
    const {width} = useWindowDimensions();
  return (
    <View style={[itemStyles.parentView, {width}]} >
    <Text style={[itemStyles.item, {width}]}>{item.id}</Text>
    </View>
  )
}

export default PopularItem

const itemStyles = StyleSheet.create({
    parentView : {
        flex:1 ,
        flexDirection:'row',
        backgroundColor:'gray',
        height:"100%",
        width:"100%",
    },
    item: {
        backgroundColor:'white'
    }
})