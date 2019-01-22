import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({
    tableHeadFields,
    onClickSorting,
    getClassSortArrow
}) => (
    <thead className='thead-dark'>
        <tr>   
            {
                tableHeadFields.map((field, index) => {
                    return (
                        <th
                            onClick={() => onClickSorting(field)}
                            key={index}
                            scope='col'
                        >
                            {field}
                            {
                                field !== 'favorite' ?
                                <i className={`ml-1 mb-1 ${getClassSortArrow(field)}`}></i>
                                : null
                            }
                
                        </th>
                    )
                })
            }
        </tr>
    </thead>
)

TableHead.propTypes = {
    tableHeadFields: PropTypes.array.isRequired,
    onClickSorting: PropTypes.func.isRequired,
    getClassSortArrow: PropTypes.func.isRequired
}

export default TableHead;
