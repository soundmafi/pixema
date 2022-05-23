import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledContainer = styled.div`
	display: grid;
	width: 250px;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 5px;
	margin-bottom: 20px;
`;

export const StyledButton = styled.button`
	padding: 2px 5px;
	${typography.S3}
	border: 1px solid ${Colors.BG_GRAPHITE};
	border-radius: 8px;
`;

// export const StyledTotalPage = styled.p`

// `;
