import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => (
  <View style={styles.headerStyle}>
    <Text style={styles.headerTextStyle}>Individualized Education Plan (IEP)</Text>

    <Text style={styles.grade}>K-12</Text>

    <Text style={styles.definition}>An Individual Education Plan, or IEP, is a plan for students with disabilities that explains what they need to succeed in their education.</Text>

    <Text style={{ fontSize: 20, textDecorationLine: 'underline', paddingBottom: 5 }}>Read More</Text>
    <Text>
      Under IDEA law, an IEP is a legal document outlining a student's disability, how it affects their education, the student's educational placement, measurable goals for the student, and services, aids, and supports that the school must provide to assist the student. There are 13 disability categories to meet the criteria for an IEP, and students must only meet one to be eligible for an IEP. However, students meeting multiple disability categories will have a "primary" disability and a "secondary" disability in their IEP.
    </Text>
  </View>
  );

const SearchRoute = () => (
  <View style={styles.headerStyle}>
    <Text style={styles.headerTextStyle}>Individualized Education Plan (IEP)</Text>

    <Text style={styles.definition}>An Individual Education Plan, or IEP, is a plan for students with disabilities that explains what they need to succeed in their education.</Text>

    <Text>
      Under IDEA law, an IEP is a legal document outlining a student's disability, how it affects their education, the student's educational placement, measurable goals for the student, and services, aids, and supports that the school must provide to assist the student. There are 13 disability categories to meet the criteria for an IEP, and students must only meet one to be eligible for an IEP. However, students meeting multiple disability categories will have a "primary" disability and a "secondary" disability in their IEP.
    </Text>
  </View>
  );

const JBMComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
    { key: 'search', title: 'Search', icon: 'magnify' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
  });

  console.log(BottomNavigation.getColor)
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      style={styles.bottomNavStyle}
      activeColor='white'
      getColor={'white'}
    />
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    margin: 20,
  },
  headerTextStyle: {
    fontSize: 35,
  },
  definition: {
    fontSize: 25,
    paddingBottom: 15,
  },
  bottomNavStyle: {
    backgroundColor: 'white',
    
  },
  grade: {
    color: '#808080',
    fontSize: 15,   
    paddingBottom: 15
  }
})

export default JBMComponent;