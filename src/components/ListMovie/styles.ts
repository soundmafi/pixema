import styled from 'styled-components';
import { media } from '../../ui/media';

export const StyledList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
	grid-gap: 10px; 

	width: 100%;

	${media.TABLET} {
		grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
	}
`;

export const ListContainer = styled.div`
	grid-area: outlet;
	width: 100%;
`;
