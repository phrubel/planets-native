import { View, StyleSheet } from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planetHeader';
import { colors } from '../theme/colors';

export default function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
