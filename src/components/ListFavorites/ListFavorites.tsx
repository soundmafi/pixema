import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootStore } from '../../store/store';
import CardItemMovie from '../CardItemMovie/CardItemMovie';

export default function ListFavorites() {

    const { favorites } = useSelector(({ favorites }: RootStore) => favorites);
    
	return (
		<StyledList>
			{favorites.map(({ title, poster, imdbID }) => {
				return (
					<Link to={`/${imdbID}`} key={imdbID}>
						<CardItemMovie key={imdbID} title={title} poster={poster} imdbID={imdbID} />
					</Link>
				);
			})}
		</StyledList>
	);
};


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

