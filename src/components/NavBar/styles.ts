import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';

export const StyledNavbar = styled.div<{ isOpen: boolean }>`
	position: absolute;
	z-index: 20;
	right: ${({ isOpen }) => {
		return isOpen ? `0px` : `-250px`;
	}};
	top: 100px;

	width: 250px;
	padding: 20px;
	background-color: ${Colors.BG_DARK};

	border-radius: 10px;

	transition: right 0.3s ease-in-out;

	${media.TABLET} {
		right: ${({ isOpen }) => {
		return isOpen ? `0px` : `-300px`;
	}};
	}

	${media.MOBILE} {
		right: ${({ isOpen }) => {
		return isOpen ? `0px` : `-300px`;
	}};
	}



	
`;
