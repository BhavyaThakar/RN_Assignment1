import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: 1,
    title: "User 1",
  },
  {
    id: 2,
    title: "User 2",
  },
  {
    id: 3,
    title: "User 3",
  },
  {
    id: 4,
    title: "User 4",
  },
  {
    id: 5,
    title: "User 5",
  },
  {
    id: 6,
    title: "User 6",
  },

];
const Item = ({ item,onPress,  backgroundColor, textColor }) => (
  <TouchableOpacity onPress={(onPress)} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const onPress = () => navigation.navigate('Details');

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "blue" : "skyblue";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={onPress}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );s
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;