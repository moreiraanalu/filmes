
import { View, Image, Text, TouchableOpacity  } from "react-native";
import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";

export default function CardMovies({titulo, img, nota, descricao}){
 
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.containerJogos} onPress={()=> navigation.navigate('Detalhes', {titulo, nota, img, descricao})}>
            <Image style={styles.images} source={{uri:(`https://image.tmdb.org/t/p/original${img}`)}} />
            <Text style={styles.titulo}> {titulo} </Text>
            <Text style={styles.textNota}> {nota} </Text>
 
        </TouchableOpacity>
    )
}
