import React, { useState } from "react";
import {SafeAreaView, StyleSheet, View,TextInput} from 'react-native';

const SearchBar: React.FC = () => {
    const [text, onChangeText] = useState(String);
    return (
        <View style={searchBarStyle.searchBarParentView}>
            <TextInput
        style={searchBarStyle.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search here"
        placeholderTextColor={'white'}
      />
        </View>
    );
}

export default SearchBar

const searchBarStyle = StyleSheet.create({
    searchBarParentView:{
        flex:1,
        backgroundColor:'#A3B7F6',
        justifyContent:'center'
    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        color:'white',
        borderColor:'white'
      },
})