/**
 * 
 * @param {*} state 
 */

export const autoSuggestionSelector = state => {

    if (state.app.searchInput.length === 0) {
        return []
    }
    const data = Object.keys(state.app.propertyData).map(key => state.app.propertyData[key])

    const filtred = data.filter(searcFunc(state.app.currentSearchFilter))
    filtred.length = 5;

    console.log(filtred);

    return filtred;
}

/**
 * 
 * @param {*} state 
 */

export const propertyDataSelector = state => {

    if (state.app.propertyData) {
        const data = Object.keys(state.app.propertyData).map((key) => {
     
            return state.app.propertyData[key];

        })
        data.sort(getSortFunction(state.app));
        const filtered = data.filter(searcFunc(state.app.currentSearchFilter))
        filtered.length = 15;
        return filtered;
    }
}

/**
 * 
 * @param {*} searchCriteria 
 */

export const searcFunc = searchCriteria => item => {
    const searchFields = ['id', 'address', 'type']
    for (let field of searchFields) {
        if (item[field].toString().toLowerCase().search(searchCriteria.toLowerCase()) >= 0) {
            return true;
        }
    }
    return false;
}

/**
 * 
 * @param {*} type 
 */

const numberSortDesc = type => (a, b) => (
    b[type] - a[type]
)

/**
 * 
 * @param {*} type 
 */

const numberSortAsc = type => (a, b) => (
    a[type] - b[type]
)

/**
 * 
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
}

/**
 * 
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
}

/**
 * 
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
}

/**
 * 
 * @param {*} sortFunc 
 */

const favoriteFirst = sortFunc => (a, b) => {
    if (a.isFavorite === b.isFavorite) {
        return sortFunc(a, b);
    }
    return sortFavorite(a, b);
}

/**
 * 
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
}
