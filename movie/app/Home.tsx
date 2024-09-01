import { Text, View } from "react-native";
import Popular from "@/components/home-page-components/Popular";
import { styleIndex } from "./styleIndex";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/home-page-components/SeachBar";

export default function Home() {
  return (
    <View
      style={styleIndex.container}
    >
      <View style={styleIndex.searchBarContainer}> 
        <SearchBar/>
      </View>
     <View style={styleIndex.inContainerUp}> 
      <Popular/> 
     </View> 
     <View style={styleIndex.inContainerDown}>
      <Text>bottom</Text>
     </View>
    </View>
  );
}
