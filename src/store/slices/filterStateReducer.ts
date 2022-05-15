import { createSlice } from "@reduxjs/toolkit";

interface IFilterState{
	isDisable:boolean
}

const initialState:IFilterState = {
	isDisable: false,
}

const filterStateSlice = createSlice({
	name:'filterState',
	initialState,
	reducers: {
		setStateFilterOpen: (state) => {
			state.isDisable = true;
		},
		setStateFilterClose: (state) => {
			state.isDisable = false;
		},
	},
});

export default filterStateSlice.reducer;
export const { setStateFilterOpen, setStateFilterClose } = filterStateSlice.actions;
