import React from 'react'

export const CityContext = React.createContext({
	selectedCity: {},
  setSelectedCity: () => {}
});

export default { CityContext };