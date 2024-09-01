import TrendingParent from "@/components/explorer-page-components/TrendingParent";
import { Text,StyleSheet, View } from "react-native";

 const Explore: React.FC = () =>  {
    return(
        <View style={ExploreStyles.ExploreParentView}>
            <TrendingParent/>
        </View>
    );
}

export default Explore

const ExploreStyles = StyleSheet.create({
    ExploreParentView :{
        flex:1
    }
})