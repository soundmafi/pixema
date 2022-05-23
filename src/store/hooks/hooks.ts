import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootStore } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export const useAppDispatch = () => useDispatch();
