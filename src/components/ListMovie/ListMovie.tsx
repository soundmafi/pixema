import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import styled from 'styled-components';
import { transformMovies } from '../../services/mappers/movies';
import { movieApi } from '../../services/movieApi';
import { IMovies, IRequestParams } from '../../services/types';
import CardItemMovie from '../CardItemMovie/CardItemMovie';

const List = () => {
	const initialMovies: IMovies = {
		response: null,
		results: [],
		totalResults: 0,
		currentPage: 1,
		totalPages: 0,
	};

	const [movies, setMovies] = useState<IMovies>(initialMovies);

	const initialRequestParams: IRequestParams = {
		title: 'love',
		year: '',
		type: 'movie',
		page: 2,
	};
	const [requestPrarms, setRequestParams] = useState<IRequestParams>(initialRequestParams);
	
	useEffect(() => {
		movieApi
			.getMoviesByParams(requestPrarms)
			.then((movies) => setMovies(transformMovies(movies)));
	}, []);

	return (
		<StyledList>
			{movies.results.map(({ title, poster, imdbID }) => {
				return (
					<Link to ={`/${imdbID}`}  key={imdbID}>
						<CardItemMovie key={imdbID} title={title} poster={poster} imdbID={imdbID} />
					</Link>
				);
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
