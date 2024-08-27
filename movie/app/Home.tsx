import { Text, View } from "react-native";
import Popular from "@/components/Popular";
import { styleIndex } from "./styleIndex";

export default function Home() {
  return (
    <View
      style={styleIndex.container}
    >
      <View style={styleIndex.searchBarContainer}> 
        <Text> Search bar</Text>
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
