import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../../redux/actionCreators';

<<<<<<< HEAD
/*eslint-disable */
=======
>>>>>>> f2384c7a01a5a99c9299b3c9754635b3dd616b79
class ListItem extends Component {
  render() {
    return (
      <div>
        {this.props.lists ? (
          this.props.lists.map((list, item) => {
            return (
<<<<<<< HEAD
              <div key={item} id={item}>
=======
              <div key={item}>
>>>>>>> f2384c7a01a5a99c9299b3c9754635b3dd616b79
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
<<<<<<< HEAD
                {list.reminders
                  ? list.reminders.map((reminder, i) => {
                      return (
                        <div key={i}>
                          <h4>{reminder}</h4>
                        </div>
                      );
                    })
                  : ''}
=======
>>>>>>> f2384c7a01a5a99c9299b3c9754635b3dd616b79
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

<<<<<<< HEAD
/*eslint-enable */

=======
>>>>>>> f2384c7a01a5a99c9299b3c9754635b3dd616b79
const mapStatetoProps = state => ({
  lists: state.lists
});

const mapDispatchtoProps = dispatch => ({
  handleReminder(event, key) {
<<<<<<< HEAD
=======
    event.preventDefault();
>>>>>>> f2384c7a01a5a99c9299b3c9754635b3dd616b79
    dispatch(addReminder(event.target.reminder.value, key));
  }
});
export default connect(mapStatetoProps, mapDispatchtoProps)(ListItem);
