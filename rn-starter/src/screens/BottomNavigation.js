import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => (
  <View style={styles.headerStyle}>
    <Text style={styles.headerTextStyle}>Individualized Education Plan (IEP)</Text>
  </View>
  );

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Search</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    margin: 20,
    fontSize: 20
  },
  headerTextStyle: {
    fontSize: 30
  }
})

export default MyComponent;