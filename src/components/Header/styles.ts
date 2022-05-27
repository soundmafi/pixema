import styled from 'styled-components';
import { media } from '../../ui/media';

export const StyledHeader = styled.div`
	grid-area: header;

	display: grid;
	grid-template-columns: 0.15fr 1fr 0.2fr;
	grid-column-gap: 40px;

	margin-bottom: 56px;

	${media.TABLET} {
		grid-template-columns: 0.15fr 1fr 0.2fr;
		grid-column-gap: 20px;
	}
`;
