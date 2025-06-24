import {View, Text ,Image} from "react-native"
import { useRoute } from "@react-navigation/native"
 
export default function Detalhes(){

    const route = useRoute();

    return(
        <View>
            <Text> {route.params.titulo} </Text>
            <Text> {route.params.nota}  </Text>
            <Image style={{width:180,height:180, marginLeft: 130}} source={{uri: route.params.img}} />
        </View>
    )
}