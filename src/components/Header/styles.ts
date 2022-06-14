import styled from 'styled-components';
import { media } from '../../ui/media';

export const StyledHeader = styled.div`
	grid-area: header;

	position: relative;

	display: grid;
	grid-template-columns: 0.2fr 1fr 0.25fr;
	grid-column-gap: 40px;

	margin-bottom: 40px;
	@media (max-width: 1200px) {
		grid-template-columns: 0.2fr 1fr 0.45fr;
		grid-column-gap: 20px;
	}

	${media.TABLET} {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		margin-bottom: 30px;
	}

	${media.MOBILE} {
		margin-bottom: 15px;
	}
`;
