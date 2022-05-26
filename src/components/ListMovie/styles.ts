import styled from 'styled-components';

export const StyledList = styled.ul`

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
	grid-gap: 10px; 
`;

export const ListContainer = styled.div`
	grid-area: outlet;
	width: 100%;
`;
