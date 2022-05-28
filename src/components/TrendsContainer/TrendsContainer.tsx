import React from 'react';

import TrendsSlider from '../TrendsSlider/TrendsSlider';
import { StyledContainer, StyledTitleRecommendation } from './styled';
import {Search} from './../../responseMovie.json';



function TrendsContainer() {
	return (
		<StyledContainer>
			<StyledTitleRecommendation>Series</StyledTitleRecommendation>
			<TrendsSlider />

			<StyledTitleRecommendation>Animation</StyledTitleRecommendation>
			<TrendsSlider/>

			<StyledTitleRecommendation>Movies</StyledTitleRecommendation>
			<TrendsSlider  />

			<StyledTitleRecommendation>Shows</StyledTitleRecommendation>
			<TrendsSlider />
		</StyledContainer>
	);
}

export default TrendsContainer;
