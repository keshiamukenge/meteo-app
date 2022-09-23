import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { CityContext } from '../components/CityContext';
import { Section } from './styledComponents';
import SearchBar from '../components/SearchBar';
import { getCityLocationApi } from '../services/cities.services';

export default function Search() {
	const [userValue, setUserValue] = useState(null);
	const [filteredCities, setFilteredCities]	= useState([]);
	const [selectedCity, setSelectedCity] = useState({});
  const value = { selectedCity, setSelectedCity };
	const navigation = useNavigation();

	async function getCityLocation({ value }) {
		const result = await getCityLocationApi({ value })

		try {
			setFilteredCities(result.data.features)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getCityLocation({ value: userValue })
	}, [userValue])

	return (
		<CityContext.Provider value={value}>
		<Section>
			<SearchBar
				onChangeText={(value) => {
					setUserValue(value)
				}}
				filteredCities={filteredCities}
				navigation={navigation}
			/>
		</Section>
		</CityContext.Provider>
	);
}