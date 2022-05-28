import styled from 'styled-components';
import { typography } from '../../ui/typography';

export const StyledContainer = styled.div`
	grid-area: outlet;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
`;

export const StyledTitleRecommendation = styled.h2`
width: 100%;
	${typography.H2}
	margin-bottom: 10px;

    padding: 10px 20px;

    background-color: #a9b7ff3b;
    border-radius: 10px;
`;
