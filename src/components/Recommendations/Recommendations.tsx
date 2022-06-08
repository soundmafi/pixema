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
	let slidersCounting = 4;
	let slidersScroll = 3;

	const sliderSettings = {
		slidesToShow: slidersCounting,
		slidesToScroll: slidersScroll,
		infinite: true,
		dots: true,
		speed: 600,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},

			{
				breakpoint: 1420,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},

			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},


			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 415,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
		],
	};


	// const windowWidth = useWindowSize();
	// let slidersCounting = 0;
	// let slidersScroll = 0;

	// if (windowWidth.width > 768) {
	// 	slidersCounting = 3;
	// 	slidersScroll = 3;
	// } else {
	// 	slidersCounting = 3;
	// 	slidersScroll = 2;
	// }
	// const sliderSettings = {
	// 	slidesToShow: slidersCounting,
	// 	slidesToScroll: slidersScroll,
	// 	infinite: true,
	// };

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
