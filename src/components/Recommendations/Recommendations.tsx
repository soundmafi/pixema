import Slider from 'react-slick';
import { useAppSelector } from '../../store/hooks/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import CardRecomendation from '../CardRecomendation/CardRecomendation';
import { StyledCardContainer, StyledRecommendation, StyledTitleRecommendation } from './styles';
import { getMoviesList } from '../../store/selectors/moviesSelectors';

const Recommendations = () => {
	const sliderSettings = {
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true,
	};

	const moviesList = useAppSelector(getMoviesList);

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