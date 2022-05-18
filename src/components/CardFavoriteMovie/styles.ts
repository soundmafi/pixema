import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledCardItemMovie = styled.li`
	position: relative;
	display: block;

	width: 266px;
`;

export const StyledTitle = styled.p`
	${typography.S3}
`;

export const StyledButtonClose = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;
	width: 30px;
	height: 30px;
	border-radius: 15px;
	transition: 0.2s;
	background-color: ${Colors.CTX_WHITE};
	&:hover {
		background-color: ${Colors.ORANGE};
	}

	&:active {
		opacity: 0;
		outline: 1px;
		background-color: ${Colors.CTX_ERROR};
	}
`;

export const StyledLink = styled(Link)`
	${typography.S2}

	color: ${Colors.CTX_WHITE};
	text-decoration: none;
`;
