import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CityProvider } from './src/provider/CityContext'
import Home from './src/domain/Home'
import Search from './src/domain/Search'
import Weather from './src/domain/Weather'

const { Screen, Navigator } = createNativeStackNavigator()

export default function App() {
  return (
    <CityProvider>
      <NavigationContainer>
        <Navigator>
          <Screen name="Accueil" component={Home} />
          <Screen name="Recherche" component={Search} />
          <Screen name="Météo" component={Weather} />
        </Navigator>
      </NavigationContainer>
    </CityProvider>
  )
}
