import { StyledLabel, StyledSearch } from './styles';

const Search = () => {
	return (
		<StyledLabel htmlFor="search">
			<StyledSearch placeholder="Search" name="search" />
		</StyledLabel>
	);
};

export default Search;