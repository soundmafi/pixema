import Slider from 'react-slick';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { RootStore } from '../../store/store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import CardRecomendation from '../CardRecomendation/CardRecomendation';
import { StyledCardContainer, StyledRecommendation, StyledTitleRecommendation } from './styles';

const Recommendations = () => {
	const sliderSettings = {
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true,
	};

	const moviesList = useAppSelector(({ movies }: RootStore) => movies.results);

	return (
		<StyledRecommendation>
			<StyledTitleRecommendation>Recommendation</StyledTitleRecommendation>
			<Slider {...sliderSettings}>
				{moviesList.map(({ title, poster, imdbID }) => (
					<StyledCardContainer key={imdbID}>
						<CardRecomendation
							key={imdbID}
							title={title}
							poster={poster}
							imdbID={imdbID}
						/>
					</StyledCardContainer>
				))}
			</Slider>
		</StyledRecommendation>
	);
};

export default Recommendations;