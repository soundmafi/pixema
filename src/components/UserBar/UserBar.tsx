import { IUserResponse } from '../../services/types';
import { useAppDispatch } from '../../store/hooks/hooks';
import { unsetUser } from '../../store/slices/userReducer';
import { StyledNavbar, StyledPhoto, StyledSignOut, StyledTitle } from './styles';

export interface IUserBar {
	isOpen: boolean;
    user: IUserResponse
}

const UserBar = ({ isOpen, user }: IUserBar) => {
    const dispatch = useAppDispatch();
	return (
		<StyledNavbar isOpen={isOpen}>
             <StyledPhoto src={user.photoURL}></StyledPhoto>
            <StyledTitle>{user.displayName}</StyledTitle>
            <StyledTitle>{user.email}</StyledTitle>
            <StyledSignOut onClick={ () =>dispatch(unsetUser())}>Sign Out</StyledSignOut>
		</StyledNavbar>
	);
};

export default UserBar;