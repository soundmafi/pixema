import { Outlet } from 'react-router-dom';
import useWindowSize, { Size } from '../../store/hooks/useWindowSize';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { StyledMain } from './styles';

const MainTemplate = () => {
	const size: Size = useWindowSize();
	return (
		<StyledMain>
			<Header />
			{size.width > 768 && <Aside />}
			<Outlet />
			<Footer/>
		</StyledMain>
	);
};

export default MainTemplate;
