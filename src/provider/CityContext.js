import { useState, useContext, createContext, useMemo } from 'react'

const CityContext = createContext({
  selectedCity: {},
  setSelectedCity: () => {},
  selectedCityLocation: {},
  setSelectedCityLocation: () => {},
})

export function CityProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState()
  const [selectedCityLocation, setSelectedCityLocation] = useState()

  const value = useMemo(() => {
    return {
      selectedCity,
      setSelectedCity,
      selectedCityLocation,
      setSelectedCityLocation
    }
  })

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>
}

export const useCityContext = () => useContext(CityContext)

export default { CityProvider, useCityContext }