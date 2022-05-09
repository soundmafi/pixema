import styled from 'styled-components';
import { typography } from '../../ui/typography';
import List from '../ListMovie/ListMovie';

const Recommendations = () => {
	return (
		<StyledRecommendation>
			<StyledTitleRecommendation>Recommendation</StyledTitleRecommendation>
			<List />
		</StyledRecommendation>
	);
};

export default Recommendations;

export const StyledRecommendation = styled.div`
    grid-area: recommendation;
`;

export const StyledTitleRecommendation = styled.h2`
    ${typography.H2}
    margin-bottom: 40px;

`
