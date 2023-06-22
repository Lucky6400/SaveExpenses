import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react'
import { ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={
        <ActivityIndicator size="large" color="#00ff00" />
      } persistor={persistor}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="First" component={TabStack} />
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
  return (

    <>
      <Tab.Navigator
        barStyle={{ backgroundColor: '#fff' }}
        screenOptions={({ route }) => ({
          tabBarLabel: <Text style={{ fontWeight: 500 }}>{route.name}</Text>
        })}
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