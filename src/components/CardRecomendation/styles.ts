import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledCardItemMovie = styled.li`
	display: block;
	padding: 10px 20px 0 ;
	width: 210px;
`;

export const StyledTitle = styled.p`
	${typography.S2}
`;
export const StyledLink = styled(Link)`

	${typography.S2}
	
	color: ${Colors.CTX_WHITE};
	text-decoration: none;
`;