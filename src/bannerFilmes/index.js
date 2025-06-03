import React,{Fragment} from 'react'
import {Image,Text} from 'react-native'
import styles from './style';


export default function BannerFilmes(){
    return(

        <>
 <Text style = {styles.textBanner}> EM CARTAZ </Text>

 <Image style = {styles.imageBanner} source = {require('../../img/branquelas.jpg')}/>
        </>
    );

} 