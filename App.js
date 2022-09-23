import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from './src/theme/colors';
import Home from './src/domain/Home';
import Search from './src/domain/Search';
import Weather from './src/domain/Weather';

const Tab = createBottomTabNavigator();
const { Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused
                ? 'home-sharp'
                : 'home';
            } else if (route.name === 'Recherche') {
              iconName = focused ? 'search' : 'search-sharp';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Recherche" component={Search} />
        <Tab.Screen name="Météo" component={Weather} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
