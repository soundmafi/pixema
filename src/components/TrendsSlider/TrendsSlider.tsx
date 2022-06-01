import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../TrendsSlider/styles.css';
import { StyledCardContainer, StyledRecommendation } from './styles';
// import trendsList from './../../responseMovie.json';
import CardTrends from '../CardTrends/CardTrends';
import { IMovie } from '../../services/types';

interface ITemplateFilms {
	search: IMovie[];
}

const TrendsSlider = (Search:ITemplateFilms) => {
	let slidersCounting = 4;
	let slidersScroll = 3;

	const sliderSettings = {
		slidesToShow: slidersCounting,
		slidesToScroll: slidersScroll,
		infinite: true,
		dots: true,
		speed: 1000,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<StyledRecommendation>
			<Slider {...sliderSettings}>
				{Search.search.map(({ title, poster, imdbID }) => (
					<StyledCardContainer key={imdbID}>
						<CardTrends key={imdbID} title={title} poster={poster} imdbID={imdbID} />
					</StyledCardContainer>
				))}
			</Slider>
		</StyledRecommendation>
	);
};

export default TrendsSlider;
