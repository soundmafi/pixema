import styled from 'styled-components';
import { typography } from '../../ui/typography';

export const StyledContainer = styled.div`
margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	row-gap: 50px;
`;

export const StyledText = styled.p`
	${typography.H2}
`;
