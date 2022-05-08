import { Outlet } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import { StyledMain } from './styles';

const MainTemplate = () => {
	return (
		<StyledMain>
			<Header />
			<Aside />
			<Outlet />
		</StyledMain>
	);
};

export default MainTemplate;