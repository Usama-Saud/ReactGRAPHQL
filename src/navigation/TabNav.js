import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Submit from '../Screens/SubmitScreen/Submit';
import CheckIns from '../Screens/CheckIns/CheckIns';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View, StyleSheet} from 'react-native';

createMaterialTopTabNavigator;
const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title}>checkins</Text>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarLabel: ({focused}) => (
              <Text style={focused ? styles.activeTab : styles.inactiveTab}>
                {route.name}
              </Text>
            ),
          })}
          tabBarOptions={{
            tabStyle: {paddingBottom: 0, paddingTop: 0}, 
            indicatorStyle: {backgroundColor: 'black'}, 
          }}>
          <Tab.Screen name="Submit" component={Submit} />
          <Tab.Screen name="CheckIns" component={CheckIns} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  activeTab: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  inactiveTab: {
    fontSize: 16,
  },
});
export default MyTabs;
