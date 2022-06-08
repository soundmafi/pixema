import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';

export const StyledNavbar = styled.div<{ isOpen: boolean }>`
	position: absolute;
	z-index: 20;
	right: 30px ;
	top: ${({ isOpen }) => {
		return isOpen ? `100px` : `-300px`;
	}};

	width: 250px;
	padding: 20px;
	background-color: ${Colors.BG_DARK};

	border-radius: 10px 0px 0px 10px;

	transition: top 0.5s ease-in-out;
`;

export const StyledSignOut = styled.button`
	padding: 5px 10px;
	margin-top: 10px;

	background-color: ${Colors.PRIMARY};
	border-radius: 10px;
	color: ${Colors.CTX_WHITE};

	transition: 0.3s;
	&:hover {
		background-color: #b5a7ff;
	}
	&:active {
		background-color: #6548ff;
	}
`;

export const StyledTitle = styled.h3`
	${typography.S2}
	padding: 5px;
	border-bottom: 1px solid ${Colors.CTX_WHITE};

	color: ${Colors.CTX_WHITE};
`;

export const StyledPhoto = styled.img`
	width: 100px;
	height: 100px;


	${media.TABLET} {
		width: 208px;
		height: 279px;
	}

	margin-bottom: 20px;

	border-radius: 10px;
	object-fit: cover;
	

`;


