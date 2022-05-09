import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardItemMovie from '../CardItemMovie/CardItemMovie';
import movies from './../../responseMovie.json';

const List = () => {
	// const [movie, setMovie] = useState([]);

	//  setMovie(movies.Search);

	// useEffect(() => {
	// 	fetch('http://www.omdbapi.com/?s=action&apikey=13e9bfdc&y=2022')
	// 		.then((response) => response.json())
	// 		.then((data) => setMovie(data));
	// }, []);
	return (
		<StyledList>
			{movies.Search.map(({Title, Poster,imdbID}) => {
				return 	<CardItemMovie key={imdbID} Title={Title} Poster={Poster} imdbID={imdbID}/>
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


