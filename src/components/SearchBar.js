import { TouchableOpacity } from 'react-native'

import { useCityContext } from '../provider/CityContext'
import {
  Container,
  DefaultInput,
  Suggestion,
  ContainerSuggestions
} from './styledComponents'

export default function SearchBar({ filteredCities, onChangeText, navigation }) {
  const { setSelectedCity, setSelectedCityLocation } = useCityContext()

  return (
    <Container>
      <DefaultInput
        onChangeText={onChangeText}
        placeholder="Rechercher une ville"
      />
      {filteredCities.length > 2 && (
        <ContainerSuggestions>
          {filteredCities.map((item, id) => (
            <TouchableOpacity
              key={id}
              onPress={() => {
                setSelectedCity(item)
                setSelectedCityLocation({
                  latitude: item.geometry.coordinates[1],
                  longitude: item.geometry.coordinates[0]
                })
                navigation.navigate('Météo')
              }}
            >
              <Suggestion>{item.properties.city}</Suggestion>
            </TouchableOpacity>
          ))}
        </ContainerSuggestions>
      )}
    </Container>
  )
}