/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors.dark.tint,
        shadowOpacity: 0, 
        elevation: 0
      },
      headerTintColor: Colors.light.tint,
      headerTitleAlign: 'center',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
    }}>

      <Stack.Screen 
        name="Root" 
        component={MainTabNavigator} 
        
        options= {{
          title: "MsgApp",
          headerRight: () => (
            <View style={styles.icons}>
              <Ionicons name="menu" size={40} color={Colors.light.tint} />            
            </View>
          )
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  icons: {
    backgroundColor: Colors.dark.tint,
    
  },
})
