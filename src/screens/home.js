import { View, StyleSheet, FlatList, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planetHeader';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import Text from '../components/text/text';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [searchText, setSearchText] = useState(PLANET_LIST);

  // search Function
  const searchFilter = (value) => {
    const filterList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLowerCase();
      const typedText = value.toLowerCase();

      return itemName.indexOf(typedText) > -1;
    });
    setSearchText(filterList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />

      {/* Input field */}
      <TextInput
        style={styles.textInput}
        placeholder="type the planet name"
        placeholderTextColor={colors.orange}
        autoCorrect={false}
        onChangeText={(value) => searchFilter(value)}
      />

      {/* List of planets */}
      {/* This is FlatList */}
      <FlatList
        contentContainerStyle={styles.list}
        //   Data
        data={searchText}
        // keyExtractor
        keyExtractor={(item) => item.name}
        //   Render Item Function
        renderItem={({ item }) => {
          const { name, color } = item;
          return (
            // navigation func
            <Pressable
              onPress={() => navigation.navigate('Details', { planet: item })}
              style={styles.item}
            >
              {/* Render items */}
              <View style={styles.circleItem}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <Text preset="h4" style={styles.itemName}>
                  {name}
                </Text>
              </View>
              <AntDesign name="right" size={14} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  textInput: {
    padding: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    margin: spacing[5],
    color: colors.white,
  },
  list: {
    padding: spacing[5],
  },
  circleItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
  },
  itemName: {
    marginLeft: spacing[4],
    textTransform: 'uppercase',
  },
  separator: {
    borderBottomColor: colors.grey,
    borderWidth: 0.1,
  },
});
