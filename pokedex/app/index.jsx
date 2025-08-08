import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from '@/components/Header';
import { pokemons } from "@/data/pokemons"

export default function Index() {

  const renderPokemon = ({ item }) => (
    <Text>{item.Nome}</Text>
  )

  return (
    <View style={StyleSheet.container}>
      <header title="pokedex" />
      <FlatList
      data={pokemons}
      style={StyleSheet.cards}
      keyExtractor={(pokemon) => pokemon.Numero.toString()}
      renederItem={ renderPokemon }
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
    </View>
  );
}


