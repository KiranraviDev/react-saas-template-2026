import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';

/**
 * Use these typed hooks throughout your app instead of 
 * plain `useDispatch` and `useSelector`.
 * 
 * useAppDispatch: Automatically handles thunks and middleware types.
 * useAppSelector: Provides full autocompletion for the entire state tree.
 * useAppStore: Returns the pre-typed store instance.
 */

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
