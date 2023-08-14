import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planetHeader';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import Text from '../components/text/text';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />

      {/* This is FlatList */}
      <FlatList
        contentContainerStyle={styles.list}
        //   Data
        data={PLANET_LIST}
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
    borderBottomColor: colors.white,
    borderWidth: 0.1,
  },
});
