import styled from 'styled-components';
import { Colors } from '../../ui/colors';

export const StyledNav = styled.nav`
	display: grid;
	grid-row-gap: 40px;

	a {
		text-decoration: none;
		color: ${Colors.secondary};
	}
`;
