import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledContainer = styled.div`
	display: grid;
	width: 400px;
	grid-template-columns: 2fr 0.6fr 2fr 3fr;
	column-gap: 5px;
	margin-bottom: 20px;
	align-items: center;
`;

export const StyledButton = styled.button`
	padding: 2px 5px;
	${typography.B1}
	border: 1px solid ${Colors.BG_GRAPHITE};
	border-radius: 10px;
`;
export const StyledButtonNav = styled.button`
	padding: 2px 5px;
	${typography.B1}
	border: 1px solid ${Colors.BG_GRAPHITE};
	border-radius: 10px;
`;

export const StyledTotalPage = styled.p`
text-align: center;


`;
