import { StatusBar} from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "./src/header/index.js";
import BannerFilmes from './src/bannerFilmes';
import SearchBar from './src/searchBar'
import CardMovies from "./src/cardMovies";
import movies from './movies/filmes.js'
import Routes from "./src/Routes/index.js";


  export default function app(){
    return(
      <Routes></Routes>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141a29',
      alignItems: "center"
    }
  })