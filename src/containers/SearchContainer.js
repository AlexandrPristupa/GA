import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/Search/Search';
import Autocomplite from '../components/Search/Autocomplete';
import { autoSuggestionSelector } from '../reducers/helpers';
import * as actions from '../actions/actions';


class SearchContainer extends Component {

    static propsTypes = {
        autocomplete: PropTypes.array.isRequired
    }
    
    handleSearchChange = event => {
        this.props.search(event.target.value)
    }

    handleSearchSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        
        this.props.submitSearch();
    }
    

    render() {
        const { autocomplete } = this.props;

      return (
        <div className='container position-relative'>
            <Search
                onSearchChange={this.handleSearchChange}
                onSubmitSearch={this.handleSearchSubmit}
            />
            { autocomplete.length ? <Autocomplite autocomplete={autocomplete} /> : null }
        </div>
      );
    }
}

const mapStateToProps = state => ({
    autocomplete: autoSuggestionSelector(state)
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
