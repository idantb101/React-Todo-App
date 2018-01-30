import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../../redux/actionCreators';

class ListItem extends Component {
  render() {
    return (
      <div>
        {this.props.lists ? (
          this.props.lists.map((list, item) => {
            return (
              <div key={item}>
                <h3>{list.name}</h3>
                <form
                  key={item}
                  onSubmit={event => {
                    event.preventDefault();
                    this.props.handleReminder(event, item);
                  }}
                >
                  <input
                    name="reminder"
                    type="text"
                    placeholder="add a reminder"
                  />
                  <button type="submit">+</button>
                </form>
              </div>
            );
          })
        ) : (
          <h3>nothing here</h3>
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  lists: state.lists
});

const mapDispatchtoProps = dispatch => ({
  handleReminder(event, key) {
    event.preventDefault();
    dispatch(addReminder(event.target.reminder.value, key));
  }
});
export default connect(mapStatetoProps, mapDispatchtoProps)(ListItem);
