import * as types from '../types/types.js';

const initialState = {
    propertyData: {},
    sortDirection: 'asc',
    sortType: 'id',
    searchInput: '',
    currentSearchFilter: ''
}

const app = (state = initialState, action) => {
   switch (action.type) {

        case types.RECEIVEDATA:

            return {
                ...state,
                    propertyData: {
                        ...state.propertyData,
                            [action.payload.id]: {
                        ...state.propertyData[action.payload.id],
                        ...action.payload
                    }
                }
            }


        case types.FAVORITE:

            return {
                ...state,
                    propertyData: {
                    ...state.propertyData,
                        [action.payload]: {
                            ...state.propertyData[action.payload],
                            isFavorite: true
                    }
                }
            }

        case types.SORTING: 

            return {
                ...state,
                sortDirection: action.payload.sortDirection,
                sortType: action.payload.sortType
            }

        case types.SEARCH: 

            return {
                ...state,
                searchInput: action.payload
            }
        
        case types.SUBMITSEARCH:

        return {
            ...state,
            currentSearchFilter: state.searchInput
        }

        default:

            return state

   } 
}

export default app;
