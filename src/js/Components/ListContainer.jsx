import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { addList } from '../../redux/actionCreators';

class ListContainer extends Component {
  render() {
    return (
      <div>
        <h2>this is the list container</h2>
        <form onSubmit={this.props.handleSubmit}>
          <input name="list" type="text" placeholder="add a list" />
          <button type="submit">+</button>
        </form>
        <ListItem />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  lists: state.lists
});

const mapDispatchtoProps = dispatch => ({
  handleSubmit(event) {
    event.preventDefault();
    dispatch(addList(event.target.list.value));
    // event.target.list.value = '';
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(ListContainer);
