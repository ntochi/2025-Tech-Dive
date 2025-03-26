import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

// Import screens
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeFeedScreen from './screens/HomeFeedScreen';
import ProfileScreen from './screens/ProfileScreen';
import PinDetailScreen from './screens/PinDetailScreen';
import BoardDetailScreen from './screens/BoardDetailScreen';
import CreatePinScreen from './screens/CreatePinScreen';
import CreateBoardScreen from './screens/CreateBoardScreen';
import SearchScreen from './screens/SearchScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import UserBoardsScreen from './screens/UserBoardsScreen';
import UserPinsScreen from './screens/UserPinsScreen';
import TrendingScreen from './screens/TrendingScreen';
import EditBoardScreen from './screens/EditBoardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="HomeFeed" 
            component={HomeFeedScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
          />
          <Stack.Screen 
            name="PinDetail" 
            component={PinDetailScreen}
            options={{ title: 'Pin' }}
          />
          <Stack.Screen 
            name="BoardDetail" 
            component={BoardDetailScreen}
            options={{ title: 'Board' }}
          />
          <Stack.Screen 
            name="CreatePin" 
            component={CreatePinScreen}
            options={{
              presentation: 'transparentModal',
              animation: 'slide_from_bottom',
              headerShown: false,
              contentStyle: { backgroundColor: 'transparent' }
            }}
          />
          <Stack.Screen 
            name="CreateBoard" 
            component={CreateBoardScreen}
            options={{ title: 'Create Board' }}
          />
          <Stack.Screen 
            name="Search" 
            component={SearchScreen}
          />
          <Stack.Screen 
            name="EditProfile" 
            component={EditProfileScreen}
            options={{ title: 'Edit Profile' }}
          />
          <Stack.Screen 
            name="UserBoards" 
            component={UserBoardsScreen}
            options={{ title: 'Boards' }}
          />
          <Stack.Screen 
            name="UserPins" 
            component={UserPinsScreen}
            options={{ title: 'Pins' }}
          />
          <Stack.Screen 
            name="Trending" 
            component={TrendingScreen}
            options={{ title: 'Trending' }}
          />
          <Stack.Screen 
            name="EditBoard" 
            component={EditBoardScreen}
            options={{ title: 'Edit Board' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
} 