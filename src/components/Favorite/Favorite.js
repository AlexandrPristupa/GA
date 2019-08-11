import React from 'react';
import PropTypes from 'prop-types';
import './Favorite.scss';

const Favorite = ({
    onClickFavorite,
    isFavorite,
    rowId
}) => (
    <span className='favorite-icon'>
        <i
            onClick={() => onClickFavorite(rowId)}
            className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}
        >
        </i>
    </span>
);

Favorite.propTypes = {
    onClickFavorite: PropTypes.func.isRequired,
    rowId: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool
};

export default Favorite;
