import 'react-native-gesture-handler';
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
import SetDestination from './src/screen/set-destination';
import Map from './src/screen/map';
import PaymentMethod from './src/screen/payment-method';
import Success from './src/screen/success';
import ViewOrders from './src/screen/view-orders/view-waiting-deliver';
import ViewWaitingPayment from './src/screen/view-orders/view-waiting-payment';
import ViewWaitingShipping from './src/screen/view-orders/view-waiting-shipping';
import ViewWaitingDelivery from './src/screen/view-orders/view-waiting-deliver';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Status"> 
          <Stack.Screen options={{headerShown : false}} name='Home' component={Home} />
          <Stack.Screen options={{headerShown : false}} name='Main' component={Main} />
          <Stack.Screen options={{headerShown : false}} name='Account' component={Account} />
          <Stack.Screen options={{headerShown : false}} name='Logo' component={Logo} />
          <Stack.Screen options={{headerShown : false}} name='Signup' component={SignUp} />
          <Stack.Screen options={{headerShown : false}} name='Login' component={Login} />
          <Stack.Screen options={{headerShown : false}} name='Setlocation' component={SetLocation} />
          <Stack.Screen options={{headerShown : false}} name='Setting order' component={SettingOrder} />
          <Stack.Screen options={{headerShown : false}} name='Status' component={Status} />
          <Stack.Screen options={{headerShown : false}} name='View Payment' component={ViewWaitingPayment} />
          <Stack.Screen options={{headerShown : false}} name='View Shipping' component={ViewWaitingShipping} />
          <Stack.Screen options={{headerShown : false}} name='View Delivery' component={ViewWaitingDelivery} />
          <Stack.Screen options={{headerShown : false}} name='Cart' component={Cart} />
          <Stack.Screen options={{headerShown : false}} name='setdestination' component={SetDestination} /> 
          <Stack.Screen options={{headerShown : false}} name='Map' component={Map} /> 
          <Stack.Screen options={{headerShown : false}} name='Payment Method' component={PaymentMethod} /> 
          <Stack.Screen options={{headerShown : false}} name='Success' component={Success} /> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}