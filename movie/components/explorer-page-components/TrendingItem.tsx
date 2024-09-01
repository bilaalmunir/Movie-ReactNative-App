import { TrendingPropItem } from "@/types/interfaces";
import React from "react";
import { Text, View,Image,useWindowDimensions,Pressable,StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";


const TrendingItems : React.FC<TrendingPropItem> = ({item}) => {
    const {width} = useWindowDimensions();
    return(

        <><View style={[itemStyles.popularItemParentView,
            { width },]}>
                <View>
                <Pressable style={({ pressed }) => [
                            pressed && itemStyles.pressedItem,
                        ]}>
                            <Image
                                style={itemStyles.image}
                                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
                        </Pressable>

                </View>
                        
                        
                        </View>
                        </>
    );
}

export default TrendingItems;

const itemStyles = StyleSheet.create({
    popularItemParentView : {
        flex:1 ,
        backgroundColor:'gray',
        alignItems:'center'
    },
    image: {
        height: '80%', 
        width: '100%', 
        resizeMode: 'cover', 
        borderRadius: 8,
        borderWidth: 1,
    },
    pressedItem: {
        opacity: 0.7, // Reduces opacity when pressed
        transform: [{ scale: 0.98 }], // Slightly scales down the item when pressed
      },

})
