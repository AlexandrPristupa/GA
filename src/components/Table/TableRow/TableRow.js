import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Favorite from '../../Favorite/Favorite';

const TableRow = ({
    onClickFavorite,
    row
}) => (
    <tr>
        <th scope='row'>{row.id}</th>
        <td>{row.address}</td>
        <td>{row.price}</td>
        <td>{moment(row.lastUpdate).format('h:mm:ss a')}</td>
        <td>{row.type}</td>
        <td className='d-flex justify-content-center'>
            <Favorite
                isFavorite={row.isFavorite}
                onClickFavorite={onClickFavorite}
                rowId={row.id}
            />
        </td>
    </tr>
);

TableRow.propTypes = {
    onClickFavorite: PropTypes.func.isRequired,
    row: PropTypes.object.isRequired
};

export default TableRow;
