import {View,useWindowDimensions,Text,StyleSheet} from 'react-native';
import {API_KEY} from "@env"
import { PopularItemProps } from '@/types/interfaces';



const PopularItem: React.FC<PopularItemProps> = ({ item }) => {
    console.log('it came here')
    const {width} = useWindowDimensions();
  return (
    <View style={[itemStyles.parentView, {width}]} >
    <Text style={[itemStyles.item, {width}]}> {API_KEY}{item.title}</Text>
    </View>
  )
}

export default PopularItem

const itemStyles = StyleSheet.create({
    parentView : {
        flex:1 ,
        padding:70,
        justifyContent:'center',
        alignItems:'center'
        
    },
    item: {
        backgroundColor:'white',
        height:"100%",
        borderWidth:2,
        textAlign:'center'
        }
})