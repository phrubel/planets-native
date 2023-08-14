import { View, StyleSheet } from 'react-native';
import React from 'react';
import Text from './text/text';
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';

export default function PlanetBoxDesc({ title, value }) {
  return (
    <View style={styles.container}>
      <Text preset="small" style={styles.title}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[5],
    marginHorizontal: spacing[6],
    marginVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.darkGray,
  },
  title: {
    textTransform: 'uppercase',
  },
});
