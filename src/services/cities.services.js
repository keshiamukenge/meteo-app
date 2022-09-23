import axios from 'axios';

const header = {
  'Accept': 'application/json',
};

export function getCityLocationApi({ value }) {
	const response = axios.get(`https://api-adresse.data.gouv.fr/search/?q=${value}&type=municipality&autocomplete=1`, {
		headers: header,
	})

	return response;
}

export function getCityTemperaturesApi({ latitude, longitude }) {
	const response = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`, {
		headers: header
	})

	return response;
}

export default { getCityTemperaturesApi, getCityLocationApi };