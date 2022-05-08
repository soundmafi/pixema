import styled from 'styled-components';
import { Colors } from '../../ui/colors';

export const StyledAside = styled.div`
	grid-area: aside;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StyledRights = styled.p`
	margin-top: auto;
	color: ${Colors.ctxWhite};
`;
