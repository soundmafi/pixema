import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { movieApi } from '../../services/movieApi';
import { IRequestParams } from '../../services/types';
import CardItemMovie from '../CardItemMovie/CardItemMovie';
import mov from './../../responseMovie.json';


const List = () => {
	const [movies, setMovies] = useState(mov);
	const defaultRequestParams:IRequestParams = {
		title: 'love',
		year: '',
		type: 'movie',
		page: 1

	}
	const [requestPrarms, setRequestParams] = useState<IRequestParams>(defaultRequestParams)

 useEffect(() => {
		movieApi.getMoviesByParams(requestPrarms)
	.then(movies => setMovies(movies));
	 }, []);

	return (
		<StyledList>
			{movies.Search.map(({ Title, Poster, imdbID }) => {
				return <CardItemMovie key={imdbID} Title={Title} Poster={Poster} imdbID={imdbID} />;
			})}
		</StyledList>
	);
};

export default List;

const StyledList = styled.ul`
	grid-area: outlet;

	display: flex;
	gap: 40px;
	flex-wrap: wrap;
	/* display: grid;
	grid-template-columns: repeat(auto-fill, minmax (200px, 1fr));
	grid-gap: 10px; */
	width: 100%;
	/* padding: 0;
	margin: 0; */
	list-style: none;

	/* max-width: 960px; */
`;
