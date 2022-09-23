import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import colors from '../theme/colors'
import { ContainerNavigation, NavigationButton, ContainerNavigationButton } from './styledComponents'

export default function Navigation() {
  const navigation = useNavigation()
  const iconSize = 25

  return (
    <ContainerNavigation>
      <ContainerNavigationButton>
        <Ionicons
          name={'home'}
          color={colors.secondary}
          size={iconSize}
        />
        <NavigationButton
          title="Accueil"
          onPress={() => navigation.navigate('Accueil')}
        />
      </ContainerNavigationButton>
      <ContainerNavigationButton>
        <Ionicons
          name={'search'}
          color={colors.secondary}
          size={iconSize}
        />
        <NavigationButton
          title="Rechercher"
          onPress={() => navigation.navigate('Recherche')}
        />
      </ContainerNavigationButton>
    </ContainerNavigation>
  )
}
