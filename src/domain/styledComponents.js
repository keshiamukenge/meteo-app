import styled from 'styled-components/native';

import colors from '../theme/colors';

export const Section = styled.View`
	width: 100%;
	height: 100%;
	min-height: 100%;
	paddin: 40px 20px;
`;

export const Card = styled.View`
	width: 100%;
	background-color: ${colors.white};
	border-radius: 15px;
	min-height: 100px;
	padding: 15px;
	margin-bottom: 20px;
`;

export const Background = styled.Image`
	width: 100%;
	height: 100%;
`;

export const MainTitle = styled.Text`
	font-size: 30px;
	width: 70%;
	font-weight: light;
	color: ${colors.white};
	position: absolute;
	top: 20%;
	left: 15%;
	text-align: center;
	z-index: 99;
`;

export const ContainerWeatherCards = styled.ScrollView`
	width: 100%;
	height: 100%;
	min-height: 100%;
	padding: 40px 20px;
`;

export const WeatherCardTemperature = styled.Text`
	font-size: 30px;
	font-weight: bold;
	color: ${colors.secondary};
`

export const WeatherCard = styled.View`
	width: 100%;
	background-color: ${colors.tertiary};
	border-radius: 15px;
	min-height: 100px;
	padding: 15px;
	margin: 10px 0;
`

export const WeatherCardContentInfos = styled.View`
	margin-left: 10px;	
`

export const CityTitle = styled.Text`
	font-size: 20px;
	text-align: center;
	margin-top: 20px;
	padding-bottom: 20px;
	text-transform: uppercase;
	font-weight: bold;
	color: ${colors.secondary};
`

export const Icon = styled.Image`
	width: 50px;
	height: 50px;
	margin: auto 10px;
`;

export const WeatherCardContent = styled.View`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`