import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-web';
import { typography } from './src/theme/typography';

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
      <Text style={{ fontWeight: 'bold', fontFamily: typography.primary }}>
        Open this App My Phone Yay!!!
      </Text>
      <Text
        style={{
          fontFamily: typography.secondary,
          fontSize: 26,
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
