import { StatusBar} from "react-native";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

import Header from "../../../src/header";
import BannerFilmes from '../../../src/bannerFilmes';
import SearchBar from '../../../src/searchBar'
import CardMovies from "../../../src/cardMovies";
import movies from '../../../movies/filmes'
import { useState, useEffect } from "react";


  export default function Home(){

    const [filmes, SetMovies ] = useState([]);

    useEffect(()=> {

      async function buscarFilmes(){
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTdiOWZlNGYyNzUwYjkzNjIxZWRmOGE5MzQ3ZWQ4OSIsIm5iZiI6MTc1NjIyNzA5NS43OTksInN1YiI6IjY4YWRlNjE3NWFkMWNiMDIwMmZhOGRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Si0EM2i0d3T3l29e5xvQsF3OOZXy8ihQ9i7lXHxueRE'
          }
        };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    SetMovies(data.results);

  }

  buscarFilmes();



    }, [] )




    const [filmes2, SetMovies2 ] = useState([]);

    useEffect(()=> {

      async function buscarFilmes2(){
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTdiOWZlNGYyNzUwYjkzNjIxZWRmOGE5MzQ3ZWQ4OSIsIm5iZiI6MTc1NjIyNzA5NS43OTksInN1YiI6IjY4YWRlNjE3NWFkMWNiMDIwMmZhOGRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Si0EM2i0d3T3l29e5xvQsF3OOZXy8ihQ9i7lXHxueRE'
          }
        };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    SetMovies2(data.results);

  }

  buscarFilmes2();



    }, [] )





    return(
      <ScrollView>

       <View style ={styles.container}>
        <Header></Header>
        <SearchBar></SearchBar>
        <BannerFilmes></BannerFilmes>

        <View style = {{width:'90%'}}>
          <FlatList
          data ={filmes}
          horizontal={true}
          keyExtractor={(item) => item.id}

          renderItem={({item}) =>(
            <CardMovies titulo ={item.title} img ={item.poster_path} nota={item.vote_average} descricao={item.overview}> </CardMovies>
          )}
          />



        </View>

        <View style = {{width:'90%'}}>
          <FlatList
          data ={filmes2}
          horizontal={true}
          keyExtractor={(item) => item.id}

          renderItem={({item}) =>(
            <CardMovies titulo ={item.title} img ={item.poster_path} nota={item.vote_average} descricao={item.overview}> </CardMovies>
          )}
          />



        </View>


      </View>

      </ScrollView>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141a29',
      alignItems: "center"
    }
  })






  