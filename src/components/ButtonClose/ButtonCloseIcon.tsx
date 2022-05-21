import styled from 'styled-components';
import { CloseIcon } from '../../assets/Icons';
import { Colors } from '../../ui/colors';

export const ButtonCloseIcon = () => {
	return <StyledCloseIcon width={22} height={22} color={Colors.BG_DARK} />;
};

const StyledCloseIcon = styled(CloseIcon)``;
