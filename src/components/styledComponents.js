import styled from 'styled-components/native';

import colors from '../theme/colors';

export const Container = styled.View`
	width: 100%;
	padding: 40px 20px;
`;

export const DefaultInput = styled.TextInput`
	width: 100%;
	height: 45px;
	background-color: ${colors.white};
	border-radius: 25px;
	padding: 15px;
`;

export const ButtonElement = styled.Button`
	height: 100%;
	width: 100%;
	border-radius: 25px;
	text-align: center;
`;

export const ContainerButton = styled.View`
	height: 45px;
	width: 100%;
	background-color: ${colors.secondary};
	border-radius: 25px;
	color: ${colors.white};
`;

export const ContainerHeader = styled.View`
	width: 100%;
	height: 60px;
	display: flex;
	background-color: ${colors.white};
	elevation: 99;
	position: absolute;
	bottom: 0;
`;

export const NavigationButton = styled.Button`
	width: 50%;
	height: 100%;
`;

export const ContainerSuggestion = styled.View`
	width: 100%;
	background-color: ${colors.white};
	border-radius: 25px;
	padding-top: 10px;
`;

export const Suggestion = styled.Text`
	width: 100%;
	margin-bottom: 10px;
	padding: 10px;
`;