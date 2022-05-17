import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootStore } from '../../store/store';
import CardFavoriteMovie from '../CardFavoriteMovie/CardFavoriteMovie';

export default function ListFavorites() {
	const { favorites } = useSelector(({ favorites }: RootStore) => favorites);

	return (
		<StyledList>
			{favorites.map(({ title, poster, imdbID }) => {
				return (
					<CardFavoriteMovie key={imdbID} title={title} poster={poster} imdbID={imdbID} />
				);
			})}
		</StyledList>
	);
}

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

export const StyledButtonClose = styled.button`
	position: absolute;
	background-color: red;
`;