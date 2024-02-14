import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ToastProvider } from 'react-native-toast-message';
import Home from './src/screen/home';
import Main from './src/screen/main';
import Logo from './src/screen/logo';
import Account from './src/screen/account';
import Status from './src/screen/status';
import SignUp from './src/screen/signup';
import Login from './src/screen/login';
import SetLocation from './src/screen/setLocation';
import Cart from './src/screen/cart';
import SettingOrder from './src/screen/setting-order';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Account">
          <Stack.Screen options={{headerShown : false}} name='Home' component={Home} />
          <Stack.Screen options={{headerShown : false}} name='Main' component={Main} />
          <Stack.Screen options={{headerShown : false}} name='Account' component={Account} />
          <Stack.Screen options={{headerShown : false}} name='Status' component={Status} />
          <Stack.Screen options={{headerShown : false}} name='Logo' component={Logo} />
          <Stack.Screen options={{headerShown : false}} name='Signup' component={SignUp} />
          <Stack.Screen options={{headerShown : false}} name='Login' component={Login} />
          <Stack.Screen options={{headerShown : false}} name='Setlocation' component={SetLocation} />
          <Stack.Screen options={{headerShown : false}} name='Setting order' component={SettingOrder} />
          <Stack.Screen options={{headerShown : false}} name='Cart' component={Cart} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
