import {Text, StyleSheet,useWindowDimensions, ActivityIndicator} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import PopularItem from '@/components/PopularItem'
import { getPopularMovies } from "@/API/getApi";
import { useState, useEffect } from "react";
import { Movie } from "@/types/interfaces";



export default function Popular () {
    const [data, setData] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isFetching, setIsFetching] = useState(false)
  
  useEffect(() => {
    const fetchPopularMovies = async () => {
        if (isFetching) return;
        setIsFetching(true);
      const movies = await getPopularMovies(pageNumber);

      setData(prevData => [...prevData, ...movies]);
      setLoading(false);
      setIsFetching(false);
    };

    fetchPopularMovies();
  }, [pageNumber]);

  function updatePageNumber(){
    if(!isFetching){
    setPageNumber(prevPageNumber => prevPageNumber+1)
    }
  }
  if (loading) {
    return (
      <View style={popularStyles.loaderContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
    // console.log(data)
  return (
   <View style={[popularStyles.parentView]}>
    <FlashList data={data}
     renderItem={({item}) => <PopularItem item={item}/>}
     keyExtractor={(item) => item.id.toString()}
     estimatedItemSize={200}
     horizontal={true}
     onEndReached={updatePageNumber}
     onEndReachedThreshold={0.7}
    />
   </View>
  );
}

const popularStyles = StyleSheet.create({
    parentView : {
        flex:1 ,
        alignContent:'center',
        backgroundColor:'green',
        
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      itemContainer: {
        flexDirection: 'column',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      image: {
        width: '100%',
        height: 200,
        borderRadius: 4,
        marginBottom: 10,
      },
      noImage: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 4,
        marginBottom: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      overview: {
        fontSize: 14,
        color: '#555',
      },
})