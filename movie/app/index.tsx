import { Text, View } from "react-native";
import Popular from "@/components/Popular";
import { styleIndex } from "./styleIndex";
export default function Index() {
  return (
    <View
      style={styleIndex.container}
    >
     <View style={styleIndex.inContainerUp}> 
      <Popular/> 
     </View> 
    </View>
  );
}
