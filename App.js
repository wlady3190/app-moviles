import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './Navigators/StackNavigator';
import BottomNavigator from './Navigators/ButtonNavigator';
import MainNavigation from './Navigators/MainNavigator';
import { CarritoProvider } from './context/CarritoContext';

export default function App() {

  return (
    <CarritoProvider>
      <MainNavigation />
    </CarritoProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
