import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import Text from './src/components/text/text';

export default function App() {
  const [fontLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!fontLoaded) {
    return <Text>Font Loading..!!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text preset="h1">Open this App My Phone Yay!!!</Text>
      <Text
        preset="h2"
        style={{
          color: 'green',
          marginTop: spacing[1],
        }}
      >
        Open this App My Phone Yay!!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
