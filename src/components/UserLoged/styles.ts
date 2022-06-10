import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';

export const StyledUserLogged = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;

	border-radius: 10px;

	${media.TABLET} {
		margin-bottom: 15px;
	}
`;
export const StyledBadge = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 45px;
	height: 45px;

	${typography.H3}

	background-color: ${Colors.PRIMARY};
	border-radius: 10px;
	color: ${Colors.CTX_WHITE};
`;

export const StyledUsername = styled.p`
	${typography.S3}
	padding: 10px 20px;
	color: ${Colors.CTX_WHITE};
	cursor: pointer;
`;

export const StyledOpenIcon = styled.div<{ isOpen: boolean }>`
	padding: 8px 10px;
	border-radius: 10px;
	background-color: ${Colors.BG_GRAPHITE};

	cursor: pointer;

	transform: ${({ isOpen }) => {
		return isOpen ? `rotate(180deg)` : `rotate(0deg)`;
	}};
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: #565656;
	}

	&:active {
		background-color: #737595;
		box-shadow: 0px 0px 11px 2px rgb(210 210 210 / 40%);
	}
`;

export const StyledLink = styled(Link)`
	${typography.S2}

	color: ${Colors.CTX_WHITE};
	text-decoration: none;
`;
