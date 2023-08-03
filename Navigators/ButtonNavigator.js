import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name='Cart' component={CartScreen}/>
      <Tab.Screen name='Account'  component={AccountScreen}/>
    </Tab.Navigator>
  );
}

export default function BottomNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>

        </NavigationContainer>
    );

};