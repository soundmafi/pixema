import Nav from '../Nav/Nav';
import Rights from '../Rights/Rights';
import { StyledAside } from './styles';

const Aside = () => {
	return (
		<StyledAside>
			<Nav />
			<Rights />
		</StyledAside>
	);
};

export default Aside;
