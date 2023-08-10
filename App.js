import { StyleSheet } from 'react-native';
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import { StatusBar } from 'expo-status-bar';
import Details from './src/screens/details';

const Stack = createNativeStackNavigator();

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
    <>
      <NavigationContainer theme={DarkTheme}>
        {/* header have many option, headerShown is one of them */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
