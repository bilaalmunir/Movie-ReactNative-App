import { StyleSheet, Text,  } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import { getTrendingData } from "@/API/getApi";
import TrendingItems from "./TrendingItem";
import { useState, useEffect } from "react";
import {  Trending } from "@/types/interfaces";

const TrendingParent: React.FC = () => {
    const [data, setData] = useState<Trending[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [pageNumber, setPageNumber] = useState<Number>(1);

    useEffect(() => {
        const fetchTrendingData = async () => {
            if (isFetching) return;
            setIsFetching(true);
            const trendingData = await getTrendingData(pageNumber)
            if (trendingData != data) {
                setData(prevData => [...prevData, ...trendingData]);
            }
            setIsFetching(false);
        }
        fetchTrendingData;
    }, [])
    return (
       

            <View style={[TrendingStyles.parentItemView]}>
                {/* <FlashList data={data}
                    renderItem={({ item }) => <PopularItem item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    estimatedItemSize={200}
                    onEndReachedThreshold={0.7} /> */}
                    
                    <TrendingItems/>
                    
            </View>
    );
}

export default TrendingParent;


const TrendingStyles = StyleSheet.create({

  
    parentItemView: {
        flex: 1,
        backgroundColor: 'gray',

    }
})