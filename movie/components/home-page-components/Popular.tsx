import { Text, StyleSheet, useWindowDimensions, ActivityIndicator } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import PopularItem from '@/components/home-page-components/PopularItem'
import { getPopularMovies } from "@/API/getApi";
import { useState, useEffect } from "react";
import { Movie } from "@/types/interfaces";



export default function Popular() {
    const [data, setData] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isFetching, setIsFetching] = useState(false)
    

    useEffect(() => {
        const fetchPopularMovies = async () => {
            if (isFetching) return;
            setIsFetching(true);
            const movies = await getPopularMovies(pageNumber);
            setData(prevData => {
                const newMovies = movies.filter(movie => !prevData.some(m => m.id === movie.id));
                return [...prevData, ...newMovies];
            });
            setLoading(false);
            setIsFetching(false);
        };

        fetchPopularMovies();
    }, [pageNumber]);

    function updatePageNumber() {
        if (!isFetching) {
            setPageNumber(prevPageNumber => prevPageNumber + 1)
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
        <><View
            style={popularStyles.titleView}>
            <Text>POPULAR</Text>
        </View>

            <View style={[popularStyles.parentItemView]}>
                <FlashList data={data}
                    renderItem={({ item }) => <PopularItem item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    estimatedItemSize={200}
                    horizontal={true}
                    onEndReached={updatePageNumber}
                    onEndReachedThreshold={0.7} />
            </View></>
    );
}

const popularStyles = StyleSheet.create({

    titleView: {
        flex: 0.2,
        width:'100%',
        backgroundColor: '#A3B7F6',
        alignSelf:'flex-start',
        borderRadius:10,
        padding:5

    },
    parentItemView: {
        flex: 0.8,
        alignContent: 'center',
        backgroundColor: 'green',
        justifyContent: 'space-around'

    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overview: {
        fontSize: 14,
        color: '#555',
    },
})