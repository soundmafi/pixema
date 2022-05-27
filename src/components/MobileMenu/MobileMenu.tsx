import React, { useState } from 'react';
import { MenuMobileIcon } from '../../assets/Icons';
import NavBar from '../NavBar/NavBar';
import { StyledMenuContainer } from './styles';

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		!isOpen ? setIsOpen(true) : setIsOpen(false);
	};

	return (
		<>
			<StyledMenuContainer onClick={handleToggle}>
				<MenuMobileIcon />
			</StyledMenuContainer>

			<NavBar isOpen={isOpen} />
		</>
	);
};

export default MobileMenu;
