import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { CityContext } from './CityContext';
import { Container, DefaultInput, Suggestion, ContainerSuggestion } from './styledComponents';

export default function SearchBar({ filteredCities, onChangeText, navigation }) {
	const { setSelectedCity } = useContext(CityContext);

	return (
		<Container>
			<DefaultInput
				onChangeText={onChangeText}
				placeholder="Rechercher une ville"
			/>
			{filteredCities.length > 2 && (
				<ContainerSuggestion>
					{filteredCities.map((item, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => {
								setSelectedCity(item)
								navigation.navigate('Météo', {
									city: item.properties.city,
									coordinates: {
										latitude: item.geometry.coordinates[0],
										longitude: item.geometry.coordinates[1]
									},
								});
							}}
						>
							<Suggestion>{item.properties.city}</Suggestion>
						</TouchableOpacity>
					))}
					</ContainerSuggestion>
			)}
		</Container>
	);
}