import { ReactComponent as DefaultCardImage } from './../../assets/Backgrounds/default-card.svg';
import { StyledContainer, StyledText } from './styles';

const DefaultCard = () => {
	return (
		<StyledContainer>
			<DefaultCardImage />
            <StyledText>You haven't favorites...</StyledText>
		</StyledContainer>
	);
};

export default DefaultCard;
