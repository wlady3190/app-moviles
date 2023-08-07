import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OptionsLoginScreen from '../screens/OptionsLoginScreen';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NavStack" component={MyTabs} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='HomeOptionsBottom' screenOptions={{ headerShown: false }} >
            <Tab.Screen name="HomeOptionsBottom"
                component={OptionsLoginScreen}
                options={{ tabBarLabel: 'Home', tabBarIcon: () => (<AntDesign name="home" size={24} color="black" />) }} />
            <Tab.Screen name="Products" component={ProductsScreen}
                options={{ tabBarIcon: () => (<FontAwesome name="motorcycle" size={24} color="black" />) }} />
            <Tab.Screen name='Cart' component={CartScreen}
                options={{ tabBarIcon: () => (<AntDesign name="shoppingcart" size={24} color="black" />) }} />
            <Tab.Screen name='Account' component={AccountScreen}
                options={{ tabBarIcon: () => (<FontAwesome5 name="user" size={24} color="black" />) }} />
        </Tab.Navigator>
    );
}



export default function MainNavigation() {
    return (
        <NavigationContainer>
            <MyStack />

        </NavigationContainer>
    )
}