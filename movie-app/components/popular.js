import {Text, StyleSheet,useWindowDimensions} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import data from '../assets/carouselData'
import PopularItem from './popularItem'



export default function Popular () {
    console.log(data)

    const {width} = useWindowDimensions();
  return (
   <View style={[popularStyles.parentView]}>
    <FlashList data={data}
     renderItem={({item}) => <PopularItem item={item}/>}
     estimatedItemSize={200}
     horizontal={true}
    />
   </View>
  );
}

const popularStyles = StyleSheet.create({
    parentView : {
        flex:1 ,
        width:"100%",
        backgroundColor:'green'
        
    }
})