import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planetHeader';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { Entypo } from '@expo/vector-icons';
import PlanetBoxDesc from '../components/PlanetBoxDesc';

export default function Details({ route }) {
  const planet = route.params.planet;

  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;

  const pressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />

      {/* Details */}
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1560507074-b9eb43faab00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
              width: 200,
              height: 200,
            }}
          />
        </View>

        {/* Description */}
        <View style={styles.details}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text preset="small" style={styles.description}>
            {description}
          </Text>

          {/* Open wiki link */}
          <Pressable onPress={pressLink} style={styles.source}>
            <Text>Source:</Text>
            <Text style={styles.wiki} preset="h4">
              Wikipedia
            </Text>
            <Entypo name="aircraft-take-off" size={20} color="white" />
          </Pressable>
        </View>

        {/* Boxes */}
        <View style={{ height: 40 }} />
        <PlanetBoxDesc title="Rotation Time" value={rotationTime} />
        <PlanetBoxDesc title=" Revolution Time" value={revolutionTime} />
        <PlanetBoxDesc title="Radius" value={radius} />
        <PlanetBoxDesc title="Average Temp." value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    justifyContent: 'center',
    alignItem: 'center',
    marginTop: spacing[8],
    borderRadius: 20,
  },
  details: {
    marginTop: spacing[8],
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    marginHorizontal: spacing[5],
    marginTop: spacing[3],
    lineHeight: 20,
  },
  source: {
    flexDirection: 'row',
    marginTop: spacing[8],
    marginRight: spacing[3],
    alignItem: 'center',
  },
  wiki: {
    textDecorationLine: 'underline',
    marginRight: spacing[1],
  },
});
