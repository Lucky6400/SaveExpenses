import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExpensesScreen from './screens/ExpensesScreen';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import DataScreen from './screens/DataScreen';
import BudgetsScreen from './screens/BudgetsScreen';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react'
import { ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={
        <ActivityIndicator size="large" color="#00ff00" />
      } persistor={persistor}>
        <NavigationContainer>
          <StatusBar style={"dark"} />
          <Stack.Navigator>
            <Stack.Screen options={{ headerTitle: "SaveExpenses", headerShown: false }} name="First" component={TabStack} />
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Budgets" component={BudgetsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});


function TabStack() {
  const height = Dimensions.get("window").height;
  return (

    <>
      <Tab.Navigator
        barStyle={{ backgroundColor: '#000', width: '90%', alignSelf: 'center', borderRadius: 999, overflow: 'hidden', marginTop: -height/9, marginBottom: 10 }}
        screenOptions={({ route }) => ({
          tabBarLabel: <Text style={{ fontWeight: 500, color: 'white' }}>{route.name}</Text>
        })}
        style={{ backgroundColor: 'transparent' }}

        sceneAnimationEnabled
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}

          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="home" size={24} color={focused ? '#000' : "#808080"} />
            ),

          }}
        />

        <Tab.Screen
          name="Expenses"
          component={ExpensesScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="money" size={24} color={focused ? '#000' : "#808080"} />
            ),
          }}
        />

        <Tab.Screen
          name="Data"
          component={DataScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="area-chart" size={24} color={focused ? '#000' : "#808080"} />
            ),

          }}
        />


      </Tab.Navigator>
    </>
  )
}