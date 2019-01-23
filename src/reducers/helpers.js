/**
 * 
 * @param {*} state 
 */

export const autoSuggestionSelector = state => {

    if (state.app.searchInput.length === 0) {
        return []
    }
    const data = Object.keys(state.app.propertyData).map(key => state.app.propertyData[key]);

    return data.filter(searcFunc(state.app.currentSearchFilter));

};

/**
 * 
 * @param {*} state 
 */

export const propertyDataSelector = state => {

    if (state.app.propertyData) {
        const data = Object.keys(state.app.propertyData).map((key) => {
     
            return state.app.propertyData[key];

        });
        data.sort(getSortFunction(state.app));

        return data.filter(searcFunc(state.app.currentSearchFilter));
    }
};

/**
 * 
 * @param {*} searchCriteria (string)
 */

export const searcFunc = searchCriteria => item => {
    const searchFields = ['id', 'address', 'type'];
    for (let field of searchFields) {
        if (item[field].toString().toLowerCase().search(searchCriteria.toLowerCase()) >= 0) {
            return true;
        }
    }
    return false;
};

/**
 * Number sort (desc)
 * @param {*} type 
 */

const numberSortDesc = type => (a, b) => (
    b[type] - a[type]
);

/**
 * Number sort (asc)
 * @param {*} type 
 */

const numberSortAsc = type => (a, b) => (
    a[type] - b[type]
);

/**
 * Text sort (asc)
 * @param {*} type 
 */

const textSortAsc = type => (a, b) => {
    if (a[type] > b[type]) {
        return 1;
    }
    if (a[type] < b[type]) {
        return -1;
    }
    return 0;
};

/**
 * Text sort (desc)
 * @param {*} type 
 */

const textSortDesc = type => (a, b) => {
    if (a[type] > b[type]) {
        return -1;
    }
    if (a[type] < b[type]) {
        return 1;
    }
    return 0;
};

/**
 * Sort favorite objects
 * @param {*} a 
 * @param {*} b 
 */

const sortFavorite = (a, b) => {
    if (a.isFavorite && !b.isFavorite) {
        return -1;
    }
    if (b.isFavorite && !a.isFavorite) {
        return 1;
    }
    return 0;
};

/**
 * Favorite objects always first
 * @param {*} sortFunc 
 */

const favoriteFirst = sortFunc => (a, b) => {
    if (a.isFavorite === b.isFavorite) {
        return sortFunc(a, b);
    }
    return sortFavorite(a, b);
};

/**
 * get sort function by sort type
 * @param {*} state 
 */

const getSortFunction = state => {
    if (['id', 'price', 'lastUpdate'].includes(state.sortType)) {
        if (state.sortDirection === 'asc') {
            return favoriteFirst(numberSortAsc(state.sortType));
        }
        return favoriteFirst(numberSortDesc(state.sortType));
    } else {
        if (state.sortDirection === 'asc') {
            return favoriteFirst(textSortAsc(state.sortType));
        }
        return favoriteFirst(textSortDesc(state.sortType));
    }
};
