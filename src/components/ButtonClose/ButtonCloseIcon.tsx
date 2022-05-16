import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { ReactComponent as YourSvg } from './../../assets/Icons/icon-cancel.svg';

export const ButtonCloseIcon = () => {
	return <StyledCloseIcon width={22} height={22} color={Colors.BG_DARK} />;
};

const StyledCloseIcon = styled(YourSvg)`

`;
