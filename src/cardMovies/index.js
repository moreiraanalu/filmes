
import { View, Image, Text, TouchableOpacity  } from "react-native";
import styles from "./style.js";

export default function CardMovies({titulo, img}){
 
 
    return(
        <TouchableOpacity style={styles.containerJogos} >
            <Image style={styles.images} source={{uri: img}} />
            <Text style={styles.titulo}> {titulo} </Text>
            <Text style={styles.textNota}> 5/5 </Text>
 
        </TouchableOpacity>
    )
}