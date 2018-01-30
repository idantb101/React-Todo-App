import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../../redux/actionCreators';

/*eslint-disable */
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
                {list.reminders
                  ? list.reminders.map((reminder, i) => {
                      return (
                        <div key={i}>
                          <h4>{reminder}</h4>
                        </div>
                      );
                    })
                  : ''}
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

/*eslint-enable */

const mapStatetoProps = state => ({
  lists: state.lists
});

const mapDispatchtoProps = dispatch => ({
  handleReminder(event, key) {
    dispatch(addReminder(event.target.reminder.value, key));
    event.target.reminder.value = '';
  }
});
export default connect(mapStatetoProps, mapDispatchtoProps)(ListItem);
