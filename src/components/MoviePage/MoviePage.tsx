import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';
import MoviePoster from '../MoviePoster/MoviePoster';
import Recommendations from '../Recommendations/Recommendations';
import moviePage from './../../responseMoviePage.json';

const MoviePage = () => {
	return (
		<StyledMoviePage>
			<StyledAsideMovie>
				<MoviePoster Poster={moviePage.Poster} />
				<StyledButtonsContainer>
					<StyledButtonFavorite>
						<svg
							width="14"
							height="19"
							viewBox="0 0 14 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.77 17.7843L7.48 14.4943C7.07224 14.1843 6.50776 14.1843 6.1 14.4943L1.77 17.7843C1.45424 18.0381 1.02377 18.0959 0.652275 17.9343C0.280782 17.7727 0.0295672 17.4184 0 17.0143V2.95431C0.0387838 2.12998 0.404652 1.35513 1.01656 0.80141C1.62847 0.247691 2.4359 -0.0391904 3.26 0.0043149H10.26C11.0891 -0.0335703 11.8987 0.262563 12.5077 0.826425C13.1166 1.39029 13.4741 2.17479 13.5 3.00431V17.0143C13.4611 17.4038 13.2163 17.7426 12.8586 17.9017C12.501 18.0609 12.0855 18.0161 11.77 17.7843Z"
								fill="#80858B"
							/>
						</svg>
					</StyledButtonFavorite>
					<StyledButtonShare>
						<svg
							width="16"
							height="18"
							viewBox="0 0 16 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="3.54545"
								cy="8.63627"
								r="2.54545"
								stroke="#AFB2B6"
								strokeWidth="2"
							/>
							<circle
								cx="12.4544"
								cy="3.54545"
								r="2.54545"
								stroke="#AFB2B6"
								strokeWidth="2"
							/>
							<circle
								cx="12.4544"
								cy="13.7273"
								r="2.54545"
								stroke="#AFB2B6"
								strokeWidth="2"
							/>
							<path
								d="M10 13L6.09106 10.5455M6.09106 7.5L10 5"
								stroke="#AFB2B6"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</StyledButtonShare>
				</StyledButtonsContainer>
			</StyledAsideMovie>
			<StyledMovieMain>
				<StyledGenre>{moviePage.Genre}</StyledGenre>
				<StyledTitle>{moviePage.Title}</StyledTitle>
				<StyledBadgeContainer>
					<ModifiedStyledBadge>{moviePage.imdbRating}</ModifiedStyledBadge>
					<StyledBadge>
						<svg
							width="32"
							height="12"
							viewBox="0 0 32 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 0H3.27851V11.8282H0V0ZM14.7185 0V11.8282H11.8589L11.8463 3.84205L10.7058 11.8282H8.65996L7.4672 4.014L7.45373 11.8282H4.59478V0H8.83638C8.9487 0.718378 9.07805 1.55864 9.22916 2.52018L9.69545 5.52349L10.4498 0H14.7185ZM19.3033 2.01651V9.81169C19.7704 9.81169 20.0585 9.72283 20.1656 9.54388C20.272 9.36554 20.3269 8.8815 20.3269 8.09206V3.48735C20.3269 2.95036 20.3086 2.60661 20.272 2.45612C20.2355 2.30395 20.1544 2.19302 20.026 2.12272C19.8989 2.05136 19.6581 2.01651 19.3033 2.01651ZM16.0257 0H18.4739C20.0542 0 21.124 0.0681703 21.6807 0.204359C22.2383 0.341309 22.6624 0.565603 22.9521 0.876022C23.2418 1.18888 23.4235 1.5349 23.4962 1.91836C23.5697 2.30091 23.6062 3.05094 23.6062 4.17088V8.31392C23.6062 9.37604 23.552 10.0851 23.4465 10.443C23.3402 10.8011 23.1552 11.0811 22.8898 11.2841C22.6254 11.4858 22.2992 11.627 21.9106 11.7084C21.5219 11.7883 20.9368 11.8282 20.1536 11.8282H16.0259V0H16.0257ZM28.8526 4.89702C28.8526 4.39731 28.8181 4.07182 28.7496 3.91798C28.6811 3.76505 28.5486 3.68821 28.3482 3.68821C28.153 3.68821 28.0264 3.75562 27.9687 3.88785C27.9106 4.02161 27.8819 4.35835 27.8819 4.89687V9.06303C27.8819 9.58253 27.9149 9.91456 27.9807 10.0602C28.0455 10.2067 28.1766 10.2781 28.3708 10.2781C28.5702 10.2781 28.7002 10.204 28.7608 10.053C28.8216 9.90178 28.8521 9.54069 28.8521 8.96732L28.8526 4.89702ZM27.8819 0V2.81554C28.1427 2.53038 28.4328 2.31734 28.752 2.1772C29.0735 2.03766 29.4218 1.96736 29.7969 1.96736C30.2283 1.96736 30.6029 2.03081 30.9213 2.15666C31.239 2.28417 31.4814 2.4616 31.648 2.68969C31.8143 2.91855 31.9151 3.14285 31.9494 3.36136C31.9823 3.58002 32 4.04641 32 4.76159V9.12481C32 9.83543 31.9494 10.3644 31.8465 10.7122C31.746 11.0605 31.5058 11.3624 31.131 11.6175C30.7553 11.8725 30.3098 12 29.7938 12C29.423 12 29.0774 11.9239 28.7562 11.7717C28.4345 11.619 28.1405 11.3907 27.8759 11.0876L27.6724 11.8282H24.7352V0H27.8819Z"
								fill="white"
							/>
						</svg>{' '}
						{moviePage.imdbRating}
					</StyledBadge>
					<StyledBadge>{moviePage.Runtime}</StyledBadge>
				</StyledBadgeContainer>

				<StyledPlot>{moviePage.Plot}</StyledPlot>

				<StyledInfoContainer>
					<StyledAttribute>Year</StyledAttribute>
					<StyledValue>{moviePage.Year}</StyledValue>
					<StyledAttribute>Released</StyledAttribute>
					<StyledValue>{moviePage.Released}</StyledValue>
					<StyledAttribute>BoxOffice</StyledAttribute>
					<StyledValue>{moviePage.BoxOffice}</StyledValue>
					<StyledAttribute>Country</StyledAttribute>
					<StyledValue>{moviePage.Country}</StyledValue>
					<StyledAttribute>Production</StyledAttribute>
					<StyledValue>{moviePage.Production}</StyledValue>
					<StyledAttribute>Actors</StyledAttribute>
					<StyledValue>{moviePage.Actors}</StyledValue>
					<StyledAttribute>Director</StyledAttribute>
					<StyledValue>{moviePage.Director}</StyledValue>
					<StyledAttribute>Writer</StyledAttribute>
					<StyledValue>{moviePage.Writer}</StyledValue>
				</StyledInfoContainer>

				{/* <p>{moviePage.imdbID}</p>
				<p>{moviePage.Type}</p>
				<p>{moviePage.Awards}</p>				
				<p>{moviePage.DVD}</p>
				<p>{moviePage.Language}</p>
				<p>{moviePage.Metascore}</p>
				<p>{moviePage.Rated}</p>
				<p>{moviePage.Response}</p>				
				<p>{moviePage.Website}</p>
				<p>{moviePage.imdbVotes}</p> */}
			</StyledMovieMain>

			<Recommendations />
		</StyledMoviePage>
	);
};

export default MoviePage;

export const StyledMoviePage = styled.div`
	display: grid;
	grid-template-columns: 0.2fr 1fr;
	column-gap: 42px;
	grid-template-areas:
		'movieAside movieMain'
		'movieAside recommendation';

	color: white;
`;

export const StyledAsideMovie = styled.div`
	grid-area: movieAside;
`;

export const StyledMovieMain = styled.div`
	grid-area: movieMain;
`;

export const StyledRecommendation = styled.div``;

export const StyledGenre = styled.div`
	${typography.S1}
`;

export const StyledTitle = styled.h1`
	${typography.H1}
	margin-bottom: 24px;
`;

export const StyledBadge = styled.p`
	display: block;
	padding: 2px 8px;
	${typography.S3}
	background-color: ${Colors.bgGraphite};
	border-radius: 6px;
`;

export const ModifiedStyledBadge = styled(StyledBadge)`
	background-color: ${Colors.green};
`;

export const StyledBadgeContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: start;
	margin-bottom: 40px;
`;

export const StyledPlot = styled.p`
	margin-bottom: 40px;
`;

export const StyledInfoContainer = styled.div`
	display: grid;
	grid-template-columns: 0.2fr 1fr;
	grid-auto-rows: auto;
	row-gap: 20px;
	column-gap: 50px;
	margin-bottom: 56px;
`;

export const StyledAttribute = styled.p`
	${Colors.ctxLigth}
`;
export const StyledValue = styled.p`
	${Colors.ctxWhite}
`;

export const StyledButtonsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 1px;

`;
export const StyledButtonFavorite = styled.button`
padding: 12px;
background-color: ${Colors.bgGraphite};
border-radius: 10px 0 0 10px;
`;
export const StyledButtonShare = styled.button`
padding: 12px;
background-color: ${Colors.bgGraphite};
border-radius: 0 10px 10px 0;
`;
