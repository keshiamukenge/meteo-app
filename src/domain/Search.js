import { useState, useEffect, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Section } from './styledComponents'
import SearchBar from '../components/SearchBar'
import { getCityLocationApi } from '../services/cities.services'
import Navigation from '../components/Navigation'

export default function Search() {
  const [userValue, setUserValue] = useState(null)
  const [filteredCities, setFilteredCities]	= useState([])
  const navigation = useNavigation()

  const getCityLocation = useCallback(async ({ value }) => {
    const result = await getCityLocationApi({ value })

    try {
      setFilteredCities(result.data.features)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getCityLocation({ value: userValue })
  }, [userValue])

  return (
    <Section>
      <SearchBar
        onChangeText={(value) => {
          setUserValue(value)
        }}
        filteredCities={filteredCities}
        navigation={navigation}
      />
      <Navigation />
    </Section>
  )
}