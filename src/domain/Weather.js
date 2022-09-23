import { useState, useEffect } from 'react';
import { View, Text } from "react-native";

import { getCityTemperaturesApi } from '../services/cities.services';
import {
	WeatherCard,
	ContainerWeatherCards,
	WeatherCardTemperature,
	CityTitle,
	Icon,
	WeatherCardContent,
	WeatherCardContentInfos
} from './styledComponents';

const dayjs = require('dayjs');

export default function Weather({ route }) {
	const { city, coordinates } = route.params;
	const [cityTemperatures, setCityTemperatures] = useState(null);
	const [cityDates, setCityDates] = useState(null);
	const weatherIcons = {
		sun: require('../../assets/weather-icons/sun.png'),
		cloudy: require('../../assets/weather-icons/cloudy.png'),
		rain: require('../../assets/weather-icons/rain.png'),
	}

	const getWeatherIcon = ({ temperature }) => {
		if(temperature > 26) {
			return weatherIcons.sun;
		} else if(temperature < 24) {
			return weatherIcons.rain;
		} else {
			return weatherIcons.cloudy;
		}
	}

	async function getCityTemperatures() {
		const result = await getCityTemperaturesApi({
			latitude: coordinates.latitude,
			longitude: coordinates.longitude,
		 })

		try {
			setCityTemperatures(result.data.hourly.temperature_2m)
			setCityDates(result.data.hourly.time)
			console.log(cityTemperatures, cityDates)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getCityTemperatures()
	}, [city])

	return(
		<View>
			<CityTitle>{city}</CityTitle>
			<ContainerWeatherCards>
			{cityTemperatures && cityDates && cityTemperatures.map((temperature, id) => (
				<WeatherCard key={id}>
					<WeatherCardContent>
						<WeatherCardContentInfos>
							<WeatherCardTemperature>{temperature}°C</WeatherCardTemperature>
							<Text>{dayjs(cityDates[id]).format('H A')}</Text>
							<Text>{dayjs(cityDates[id]).format('DD MMMM')}</Text>
						</WeatherCardContentInfos>
						<Icon source={getWeatherIcon({ temperature })}/>
					</WeatherCardContent>
				</WeatherCard>
			))}
			</ContainerWeatherCards>
		</View>
	)
}