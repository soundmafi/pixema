import styled from 'styled-components';
import { media } from '../../ui/media';

export const StyledAside = styled.div`
	grid-area: aside;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	${media.TABLET} {
		display: none;
	}
`;
