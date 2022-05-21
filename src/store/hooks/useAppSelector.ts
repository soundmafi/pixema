import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStore } from './../store';

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
