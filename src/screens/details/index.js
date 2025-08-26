import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

export default function Detalhes() {
    const route = useRoute();

    return (
        <View style={styles.container}>
            <Text style={styles.principal}> {route.params.titulo} </Text>
            <Text style={styles.nota}> {route.params.nota} </Text>

            <View style={styles.starContainer}>
                <Stars
                    default={parseFloat(route.params.nota)}
                    count={5}
                    half={true}
                    starSize={50}
                    fullStar={<Icon name={'star'} style={styles.starStyle} />}
                    emptyStar={<Icon name={'star-outline'} style={styles.starStyle} />}
                    halfStar={<Icon name={'star-half'} style={styles.starStyle} />}
                />
            </View>

            <Image style={styles.imagem} source={{ uri: route.params.img }} />
            <Text style={styles.text}> {route.params.descricao} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141a29',
        borderRadius: 10,
        flex: 1, 
        justifyContent: 'center',
        marginTop: -100
       
    },

    nota:{
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
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
        backgroundColor: '#8ea2d4',
        marginTop: 20,
    },

    starContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center',
    },

    starStyle: {
        color: '#FFD700',
        fontSize: 30,
        marginHorizontal: 2,
    },

    principal:{
        textAlign: 'center',
        fontSize: 35,
        color: 'white',

    },

});