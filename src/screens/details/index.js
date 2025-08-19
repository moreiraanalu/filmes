import {View, Text ,Image, StyleSheet} from "react-native"
import { useRoute } from "@react-navigation/native"

import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 

export default function Detalhes(){

    const route = useRoute();

    return(
        <View style = {styles.container}>
            <Text style = {styles.principal}> {route.params.titulo} </Text>
            <Text style = {styles.nota}> {route.params.nota}  </Text>
            <Image style = {styles.imagem} source={{uri: route.params.img}} />
            <Text style = {styles.text}> {route.params.descricao} </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0e9ce',
        borderRadius: 10,
        flex: 1, 
        justifyContent: 'center',
        marginTop: -100
       
    },

    imagem:{
        width:180,
        height: 200, 
        marginLeft: 130, 
        alignItems:'center',
        borderRadius: 120,
    },

    text:{
        textAlign: 'center',
        fontSize: 12,
        padding: 15,
        backgroundColor: '#ded2a4',
        marginTop: 20,
    },

    principal:{
        textAlign: 'center',
        fontSize: 35,

    },

    nota:{
        fontSize: 22,
        textAlign: 'center',
    },



})
