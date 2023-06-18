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

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="First" component={TabStack} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="Budgets" component={BudgetsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


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