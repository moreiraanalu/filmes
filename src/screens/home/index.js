import { StatusBar} from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "../../../src/header";
import BannerFilmes from '../../../src/bannerFilmes';
import SearchBar from '../../../src/searchBar'
import CardMovies from "../../../src/cardMovies";
import movies from '../../../movies/filmes'

  export default function Home(){
    return(
       <View style ={styles.container}>
        <Header></Header>
        <SearchBar></SearchBar>
        <BannerFilmes></BannerFilmes>

        <View style = {{width:'90%'}}>
          <FlatList
          data ={movies}
          horizontal={true}
          keyExtractor={(item) => item.id}

          renderItem={({item}) =>(
            <CardMovies titulo ={item.nome} img ={item.img} nota={item.nota} descricao={item.descricao}> </CardMovies>
          )}
          />

        </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141a29',
      alignItems: "center"
    }
  })