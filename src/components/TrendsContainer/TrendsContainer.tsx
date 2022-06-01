import {
	StyledCardContainer,
	StyledContainer,
	StyledRecommendation,
	StyledTitleRecommendation,
} from './styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../TrendsSlider/styles.css';
import Movies from './../../responseMovies.json'
import CardTrends from '../CardTrends/CardTrends';

const TrendsContainer = () => {
	let slidersCounting = 5;
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
					slidesToShow: 4,
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

	return (
		<StyledContainer>
			<StyledTitleRecommendation>Series</StyledTitleRecommendation>
			<StyledRecommendation>
				<Slider {...sliderSettings}>
					{Movies.Series.map(({ title, poster, imdbID }) => (
						<StyledCardContainer key={imdbID}>
							<CardTrends
								key={imdbID}
								title={title}
								poster={poster}
								imdbID={imdbID}
							/>
						</StyledCardContainer>
					))}
				</Slider>
			</StyledRecommendation>

			<StyledTitleRecommendation>Animation</StyledTitleRecommendation>
			<StyledRecommendation>
				<Slider {...sliderSettings}>
					{Movies.Animate.map(({ title, poster, imdbID }) => (
						<StyledCardContainer key={imdbID}>
							<CardTrends
								key={imdbID}
								title={title}
								poster={poster}
								imdbID={imdbID}
							/>
						</StyledCardContainer>
					))}
				</Slider>
			</StyledRecommendation>

			<StyledTitleRecommendation>Movies</StyledTitleRecommendation>
			<StyledRecommendation>
				<Slider {...sliderSettings}>
					{Movies.Movie.map(({ title, poster, imdbID }) => (
						<StyledCardContainer key={imdbID}>
							<CardTrends
								key={imdbID}
								title={title}
								poster={poster}
								imdbID={imdbID}
							/>
						</StyledCardContainer>
					))}
				</Slider>
			</StyledRecommendation>

			{/* <StyledTitleRecommendation>Shows</StyledTitleRecommendation>
			<StyledRecommendation>
				<Slider {...sliderSettings}>
					{trendsList.Search.map(({ title, poster, imdbID }) => (
						<StyledCardContainer key={imdbID}>
							<CardTrends
								key={imdbID}
								title={title}
								poster={poster}
								imdbID={imdbID}
							/>
						</StyledCardContainer>
					))}
				</Slider>
			</StyledRecommendation> */}
		</StyledContainer>
	);
};

export default TrendsContainer;
