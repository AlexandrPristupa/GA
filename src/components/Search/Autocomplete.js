import React from 'react';
import PropTypes from 'prop-types';

const Autocomplete = ({
    autocomplete
}) => (
    <div className='list-group position-absolute w-75'>
    {   
        autocomplete.map((item) => (
            // eslint-disable-next-line
            <a className='list-group-item list-group-item-action p-1' key={item.id}>
               <span className='font-weight-bolder'>ID:</span> {item.id}, 
               <span className='font-weight-bolder'>Address:</span> {item.address}, 
               <span className='font-weight-bolder'>Type:</span> {item.type}, 
               <span className='font-weight-bolder'>Price:</span> {item.price}
            </a>
        ))
    }
    </div> 
)

Autocomplete.propTypes = {
    autocomplete: PropTypes.array
}

export default Autocomplete;
