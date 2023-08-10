import { View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Text from './text/text';
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function PlanetHeader({ backBtn }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{ marginRight: spacing[4] }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome name="angle-left" size={24} color="white" />
        </Pressable>
      )}
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomColor: colors.white,
    borderBottomWidth: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
