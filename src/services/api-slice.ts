import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type RootState } from '../store';

const baseUrl = 'http://localhost:3500';

const baseQuery = fetchBaseQuery({
	baseUrl,
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const state = getState() as RootState;

		// const token = state.auth.accessToken; // access the token property of the auth slice of your state object

		// if (token) {
		// 	headers.set('authorization', `Bearer ${token}`);
		// }

		// return headers;
	},
});

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ['Ticket', 'User'],
	endpoints: builder => ({}),
});