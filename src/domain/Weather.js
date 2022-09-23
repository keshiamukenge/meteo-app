import { useState, useEffect, useMemo, useCallback } from 'react'
import { View, Text } from 'react-native'

import Navigation from '../components/Navigation'
import { useCityContext } from '../provider/CityContext'
import { getCityTemperaturesApi } from '../services/cities.services'
import {
  WeatherCard,
  ContainerWeatherCards,
  WeatherCardTemperature,
  CityTitle,
  Icon,
  WeatherCardContent,
  WeatherCardContentInfos
} from './styledComponents'

const dayjs = require('dayjs')

export default function Weather() {
  const { selectedCityLocation, selectedCity } = useCityContext()
  const [cityTemperatures, setCityTemperatures] = useState(null)
  const [cityDates, setCityDates] = useState(null)

  const getCityTemperatures = useCallback(async () => {
    const result = await getCityTemperaturesApi({
      coordinates: selectedCityLocation
    })

    try {
      setCityTemperatures(result.data.hourly.temperature_2m)
      setCityDates(result.data.hourly.time)
    } catch (error) {
      console.log(error)
    }
  }, [selectedCityLocation])

  const weatherIcons = useMemo(() => {
    return {
      sun: require('../../assets/weather-icons/sun.png'),
      cloudy: require('../../assets/weather-icons/cloudy.png'),
      rain: require('../../assets/weather-icons/rain.png'),
    }
  }, [])

  const getWeatherIcon = ({ temperature }) => {
    if(temperature > 17) {
      return weatherIcons.sun
    } else if(temperature < 11) {
      return weatherIcons.rain
    } else {
      return weatherIcons.cloudy
    }
  }

  useEffect(() => {
    getCityTemperatures()
  }, [selectedCity])

  return(
    <View>
      <CityTitle>{selectedCity.properties.city}</CityTitle>
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
      <Navigation />
    </View>
  )
}