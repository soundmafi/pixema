import { useState } from 'react';
import { IUserResponse } from '../../services/types';
import { useAppDispatch } from '../../store/hooks/hooks';
import { unsetUser } from '../../store/slices/userReducer';
import { StyledNavbar, StyledPhoto, StyledSignOut, StyledTitle } from './styles';

export interface IUserBar {
	isOpen: boolean;
	user: IUserResponse;
}

const UserBar = ({ isOpen, user }: IUserBar) => {
    const dispatch = useAppDispatch();

    // State for sign out modal (planning)
    const [isDisables, setIsDisable] = useState(true);
	
	const signOutUser = () => {
        setIsDisable(true);				
        setTimeout(() => {
            setIsDisable(false);
            dispatch(unsetUser());
        }, 3000);
	};

	return (
        <>
		<StyledNavbar isOpen={isOpen}>
			<StyledPhoto src={user.photoURL}></StyledPhoto>
			<StyledTitle>{user.displayName}</StyledTitle>
			<StyledTitle>{user.email}</StyledTitle>
			<StyledSignOut onClick={signOutUser}>Sign Out</StyledSignOut>
		</StyledNavbar>
        </>
	);
};

export default UserBar;