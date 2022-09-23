import { useNavigation } from '@react-navigation/native';
import { ContainerHeader, NavigationButton } from './styledComponents';

export default function Header() {
	const navigation = useNavigation()

	return (
		<ContainerHeader>
			<NavigationButton
				title="Home"
				onPress={() => navigation.navigate('Home')}
			/>
			<NavigationButton
				title="Search"
				onPress={() => navigation.navigate('Search')}
			/>
		</ContainerHeader>
	);
}
