import * as types from '../types/types.js';

export const receiveData = payload => ({
    type: types.RECEIVEDATA,
    payload
});

export const favorite = payload => ({
    type: types.FAVORITE,
    payload
});

export const sorting = payload => ({
    type: types.SORTING,
    payload
});

export const search = payload => ({
    type: types.SEARCH,
    payload
});

export const submitSearch = payload => ({
    type: types.SUBMITSEARCH,
    payload
});
