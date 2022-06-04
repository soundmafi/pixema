import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks/hooks';
import { getFavorites } from '../../store/selectors/favoriteSelector';
import CardFavoriteMovie from '../CardFavoriteMovie/CardFavoriteMovie';
import DefaultCard from '../DefaultCard/DefaultCard';

export default function ListFavorites() {
	const { favorites } = useAppSelector(getFavorites);

	return (
		<>
			{favorites.length > 1 ? (
				<StyledList>
					{favorites.map(({ title, poster, imdbID }, index) => {
						if (index > 0) {
							return (
								<CardFavoriteMovie
									key={imdbID}
									title={title}
									poster={poster}
									imdbID={imdbID}
								/>
							);
						}
					})}
				</StyledList>
			) : (
				<DefaultCard />
			)}
		</>
	);
}

const StyledList = styled.ul`
	grid-area: outlet;

	display: flex;
	justify-content: center;
	gap: 40px;
	flex-wrap: wrap;
	width: 100%;
	list-style: none;
`;

export const StyledButtonClose = styled.button`
	position: absolute;
	background-color: red;
`;
