import styled from 'styled-components';
import { Colors } from '../../ui/colors';

export const StyledFilter = styled.div`
	position: relative;

	display: grid;
	grid-template-columns: 1fr;

	padding: 48px 40px;
	/* max-width: 518px; */

	border-radius: 10px;
	background-color: ${Colors.BG_DARK};
`;
export const StyledTitleFilter = styled.h2`
	margin-bottom: 48px;
`;

export const StyledTitleParameters = styled.h3`
	margin-bottom: 8px;
`;

export const StyledLine = styled.div`
	height: 3px;
	width: 100%;
	margin-bottom: 32px;

	background-color: ${Colors.BG_GRAPHITE};
`;

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 80px;

	background-color: ${Colors.BG_DARK};
`;

export const StyledButtonClose = styled.button`
	position: absolute;
	right: 50px;
	top: 25px;

	width: 20px;
	height: 20px;
	margin-left: 15px;

	background-color: ${Colors.BG_DARK};
`;

export const StyledClearFilter = styled.button`
	padding: 15px;

	color: ${Colors.CTX_WHITE};
	background-color: ${Colors.BG_GRAPHITE};

	border-radius: 10px;
`;

export const StyledShowResult = styled(StyledClearFilter)`
	color: ${Colors.CTX_WHITE};

	background-color: ${Colors.PRIMARY};
`;

export const StyledButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 40px;
`;
