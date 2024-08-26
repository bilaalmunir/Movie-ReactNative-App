import {Text, StyleSheet,useWindowDimensions} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import { Data } from "@/assets/carouselData";
import PopularItem from '@/components/PopularItem'



export default function Popular () {
    console.log(Data)
  return (
   <View style={[popularStyles.parentView]}>
    <FlashList data={Data}
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
        alignContent:'center',
        backgroundColor:'green',
        
    }
})