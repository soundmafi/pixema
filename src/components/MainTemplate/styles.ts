import styled from 'styled-components';
import { media } from '../../ui/media';

export const StyledMain = styled.div`
	display: grid;
	grid-column-gap: 40px;
	grid-template-columns: 0.2fr 1fr 0.25fr;
	grid-template-areas:
		'header header header'
		'aside outlet outlet'
		'footer footer footer';

	max-width: 1920px;
	width: 100%;
	margin: 0 auto;
	padding: 40px 62px;

	@media (max-width: 1200px) {
		padding: 20px 25px;
		grid-column-gap: 20px;
	}

	${media.TABLET} {
		grid-template-columns: 1fr;
		grid-template-areas:
			'header'
			'outlet'
			'footer';
			padding: 20px 25px;
		grid-column-gap: 20px;
	
	}

	${media.MOBILE} {
		grid-column-gap: 40px;
		grid-template-columns: 1fr;
		grid-template-areas:
			'header'
			'outlet'
			'footer';
		padding: 10px;
	}
`;
