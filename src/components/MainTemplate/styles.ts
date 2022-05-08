import styled from "styled-components";

export const StyledMain = styled.div`
	display: grid;
	grid-column-gap: 40px;
	grid-template-columns: 0.15fr 1fr 0.2fr;
	grid-template-areas:
		'header header header'
		'aside outlet outlet';
`;
