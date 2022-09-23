import axios from 'axios'

const headers = {
  'Accept': 'application/json',
}

export function getCityLocationApi({ value }) {
  const response = axios.get(`https://api-adresse.data.gouv.fr/search/?q=${value}&type=municipality&autocomplete=1`, {
    headers,
  })

  return response
}

export function getCityTemperaturesApi({ coordinates }) {
  const response = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m`, {
    headers,
  })

  return response
}

export default { getCityTemperaturesApi, getCityLocationApi }