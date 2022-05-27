import { Outlet } from 'react-router-dom';
import useWindowSize, { Size } from '../../store/hooks/useWindowSize';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import { StyledMain } from './styles';

const MainTemplate = () => {
	const size: Size = useWindowSize();
	return (
		<StyledMain>
			<Header />
			{size.width > 768 && <Aside />}
			<Outlet />
		</StyledMain>
	);
};

export default MainTemplate;
