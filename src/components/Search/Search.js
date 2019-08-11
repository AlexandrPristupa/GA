import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
    onSearchChange,
    onSubmitSearch
}) => (
    <form className="input-group mb-0 mt-3" onSubmit={onSubmitSearch}>
        <input
            type="text"
            className="form-control"
            placeholder="Address, ID or Type"
            aria-describedby="search"
            onChange={onSearchChange}
        />
        <div className="input-group-append">
            <button
                className="btn btn-outline-secondary" 
                type="button"
                id="search"
            >
                <i className="fas fa-search"></i>
            </button>
        </div>
    </form>
);

Search.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
    onSubmitSearch: PropTypes.func.isRequired
};

export default Search;
