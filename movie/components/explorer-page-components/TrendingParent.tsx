import { StyleSheet, Text, } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import { getTrendingData } from "@/API/getApi";
import TrendingItems from "./TrendingItem";
import { useState, useEffect } from "react";
import { Trending } from "@/types/interfaces";

const TrendingParent: React.FC = () => {
    const [data, setData] = useState<Trending[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [pageNumber, setPageNumber] = useState<number>(1);

    useEffect(() => {
        const fetchTrendingData = async () => {
            if (isFetching) return;
            setIsFetching(true);
            const trendingData = await getTrendingData(pageNumber);
            setData(prevData => {
                const newTrendingData = trendingData.filter(d => !prevData.some(m => m.id === d.id));
                return [...prevData, ...newTrendingData];
            });
            setIsFetching(false);
        };

        fetchTrendingData();

    }, [pageNumber]);


    function updatePageNumber() {
        if (!isFetching) {
            setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
    }

    
    return (


        <View style={[TrendingStyles.parentItemView]}>
            <FlashList
                data={data}
                renderItem={({ item, index }) => (
                    <TrendingItems item={item}  />
                )}
                keyExtractor={(item) => item.id.toString()}
                estimatedItemSize={200}
                onEndReached={updatePageNumber}
                onEndReachedThreshold={0.7}
                scrollEnabled={true}
            />
        </View>
    );
}

export default TrendingParent;


const TrendingStyles = StyleSheet.create({


    parentItemView: {
        flex: 1,
        backgroundColor: 'blue',

    }
})