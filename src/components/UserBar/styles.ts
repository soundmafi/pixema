import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';

export const StyledNavbar = styled.div<{ isOpen: boolean }>`
	position: absolute;
	z-index: 20;
	left: 0;
	top: ${({ isOpen }) => {
		return isOpen ? `85px` : `-330px`;
	}};

	display: grid;

	width: 100%;
	padding: 20px;
	background-color: ${Colors.BG_DARK};

	border-radius: 10px;

	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
		rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
		rgba(0, 0, 0, 0.09) 0px -3px 5px;

	transition: top 0.5s ease-in-out;
`;

export const StyledSignOut = styled.button`
	padding: 5px 10px;
	margin-top: 30px;

	width: 100%;

	background-color: ${Colors.PRIMARY};
	border-radius: 5px;
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
	overflow: hidden;
`;

export const StyledPhoto = styled.img`
	margin: 0 auto;

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
