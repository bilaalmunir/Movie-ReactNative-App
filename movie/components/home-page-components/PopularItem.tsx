import {View,useWindowDimensions,Text,StyleSheet,Image, Pressable} from 'react-native';
import { PopularItemProps } from '@/types/interfaces';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";


const PopularItem: React.FC<PopularItemProps> = ({ item }) => {
    
    const {width} = useWindowDimensions();
  return (
    <><View style={[itemStyles.popularItemParentView,
      { width },]}>
                  <Pressable style={({ pressed }) => [
                      pressed && itemStyles.pressedItem,
                  ]}>
                      <Image
                          style={itemStyles.image}
                          source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} />
                  </Pressable></View>
                  </>
  )
}

export default PopularItem

const itemStyles = StyleSheet.create({
    popularItemParentView : {
        flex:1 ,
        backgroundColor:'gray',
        justifyContent:'flex-end',
        marginRight:5
    },
    image: {
        height:"100%",
        width:"100%",
        resizeMode: 'cover',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    pressedItem: {
        opacity: 0.7, // Reduces opacity when pressed
        transform: [{ scale: 0.98 }], // Slightly scales down the item when pressed
      },

})