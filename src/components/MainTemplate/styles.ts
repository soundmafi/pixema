import styled from 'styled-components';
import { media } from '../../ui/media';

export const StyledMain = styled.div`
	display: grid;
	grid-column-gap: 40px;
	grid-template-columns: 0.15fr 1fr 0.2fr;
	grid-template-areas:
		'header header header'
		'aside outlet outlet';

	max-width: 1920px;
	width: 100%;
	margin: 0 auto;
	padding: 40px 62px;

	${media.TABLET} {
		grid-column-gap: 40px;
		grid-template-columns: 1fr;
		grid-template-areas:
			'header'
			'outlet';
			
		padding: 40px;
	}
`;
