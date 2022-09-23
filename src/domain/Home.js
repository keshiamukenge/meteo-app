import { Section, Background, MainTitle } from './styledComponents'
import Header from '../components/Navigation'

export default function Home() {
  return (
    <Section>
      <MainTitle>Bienvenue sur Météo App</MainTitle>
      <Background source={require('../../assets/background.jpeg')} />
      <Header />
    </Section>
  )
}