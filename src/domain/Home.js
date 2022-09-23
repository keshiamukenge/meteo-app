import { Section, Background, MainTitle } from './styledComponents'
import Header from '../components/Header';

export default function Home() {
	return (
		<Section>
			<MainTitle>Bienvenue sur Météo App</MainTitle>
			<Background source={require('../../assets/1.jpeg')} />
			<Header />
		</Section>
	)
}