import { Text, View,  } from "react-native";
import {styleIndex} from './styleIndex';
import Popular from '../components/Popular'
export default function Home() {
  return (
    <View
      style={styleIndex.container}
    >
      <View style={styleIndex.inContainerUp}>
      <Popular/>
      </View>

      <View style={styleIndex.inContainerDown}>
        <Text>Lower</Text>
      </View>
    </View>
  );
}
