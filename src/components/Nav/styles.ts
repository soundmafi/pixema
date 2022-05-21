import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledNav = styled.nav`
	display: grid;
	grid-row-gap: 40px;
`;

export const StyledText = styled.p`
	${typography.S2}
	margin-left: 10px;
`;

export const StyledLink = styled(Link)`
	display: flex;
	align-items: center;

	padding: 5px 45px 5px 10px;
	width: 100%;

	color: ${Colors.CTX_WHITE};
	text-decoration: none;

	border: 2px solid ${Colors.BG_GRAPHITE};
	border-radius: 10px;

	transition: 0.3s;
	
	&:hover {
		background-color: #353535;
	}
`;
