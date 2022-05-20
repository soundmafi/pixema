import styled from 'styled-components';

export const StyledList = styled.ul`
	display: flex;
	gap: 40px;
	flex-wrap: wrap;
	/* display: grid;
	grid-template-columns: repeat(auto-fill, minmax (200px, 1fr));
	grid-gap: 10px; */
	width: 100%;
	/* padding: 0;
	margin: 0; */
	list-style: none;

	/* max-width: 960px; */
`;

export const ListContainer = styled.div`
	grid-area: outlet;
	width: 100%;
`;
