import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '../TableRow';

const TableBody = ({
    propertyData,
    onClickFavorite
}) => (
    <tbody>
        { propertyData.map((row) => <TableRow onClickFavorite={onClickFavorite} key={row.id} row={row} />) }
    </tbody>
);

TableBody.propTypes = {
    propertyData: PropTypes.array.isRequired,
    onClickFavorite: PropTypes.func.isRequired
};

export default TableBody;
