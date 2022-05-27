import Slider from 'react-slick';
import { useAppSelector } from '../../store/hooks/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import CardRecomendation from '../CardRecomendation/CardRecomendation';
import { StyledCardContainer, StyledRecommendation, StyledTitleRecommendation } from './styles';
import { getMoviesList } from '../../store/selectors/moviesSelectors';
import useWindowSize from '../../store/hooks/useWindowSize';

const Recommendations = () => {
	const windowWidth = useWindowSize();
	let slidersCounting = 0;
	let slidersScroll = 0;

	if (windowWidth.width > 768) {
		slidersCounting = 3;
		slidersScroll = 3;
	} else {
		slidersCounting = 2;
		slidersScroll = 2;
	}
	const sliderSettings = {
		slidesToShow: slidersCounting,
		slidesToScroll: slidersScroll,
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
