import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CategoryCard from '../../components/controls/CategoryCard';
import * as categoriesActions from '../../redux/reducers/categories';

class Home extends Component {
  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div id="content">
        {this.props.categories.collection.map((entry, index) => {
          return entry.view === 'plain' ?
            (<CategoryCard key={index} data={entry}></CategoryCard>) :
            (<div key={index}>carousel</div>)
        })}
      </div>
    );
  }
}

export default connect(
  state => ({
    categories: state.categories
  }),
  dispatch => ({
    ...bindActionCreators(categoriesActions, dispatch)
  })
)(Home);
