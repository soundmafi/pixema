import Nav from '../Nav/Nav';
import { StyledAside, StyledRights } from './styles';

const Aside = () => {
	return (
		<StyledAside>
			<Nav />
			<StyledRights>© All Rights Reserved</StyledRights>
		</StyledAside>
	);
};

export default Aside;
