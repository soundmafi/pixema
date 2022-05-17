import styled from 'styled-components';
import { typography } from '../../ui/typography';

export const StyledCardItemMovie = styled.li`
position: relative;
	display: block;

	width: 266px;
`;

export const StyledTitle = styled.p`
	${typography.S2}
`;

export const StyledButtonClose = styled.button`
position: absolute;
	background-color: red;
	z-index: 1;
`;
