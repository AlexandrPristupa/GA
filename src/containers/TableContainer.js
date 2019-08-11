import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import properties$ from '../services/mock';
import TableHead from '../components/Table/TableHead';
import TableBody from '../components/Table/TableBody';
import { propertyDataSelector } from '../reducers/helpers';
import * as actions from '../actions/actions';

const tableHeadFields = ['id', 'address', 'price', 'last update', 'type', 'favorite'];

class TableContainer extends Component {

    static propTypes = {
        propertyData: PropTypes.array.isRequired,
        sortDirection: PropTypes.string.isRequired,
        sortType: PropTypes.string.isRequired
    };

    componentDidMount() {
        properties$.subscribe((data) => {
            this.props.receiveData(data);
        });
    }

    handleClickFavorite = (id) => {
        this.props.favorite(id);
    };

    handleClickSorting = (field) => {
        const { sorting, sortDirection, sortType } = this.props;

        if (field === 'favorite') {
            return;
        }

        if (field === sortType) {
            sorting({
                sortDirection: sortDirection === 'asc' ? 'desc' : 'asc',
                sortType
            });
        } else {
            sorting({
                sortDirection: 'desc',
                sortType: field
            });
        }

    };

    getClassSortArrow = (field) => {
        const { sortDirection, sortType } = this.props;

        if (field !== sortType) {
            return 'fas fa-sort-down'
        }

        if (sortDirection === 'asc') {
            return 'fas fa-sort-up'
        }

        return 'fas fa-sort-up'
    };
  
    render() {
        const { propertyData } = this.props;

        return (
            <div className='container'>
                <table className='table mt-3'>

                    <TableHead
                        tableHeadFields={tableHeadFields}
                        onClickSorting={this.handleClickSorting}
                        getClassSortArrow={this.getClassSortArrow}
                    />

                    <TableBody
                        propertyData={propertyData}
                        onClickFavorite={this.handleClickFavorite}
                    />

                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    propertyData: propertyDataSelector(state),
    sortDirection: state.app.sortDirection,
    sortType: state.app.sortType
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
