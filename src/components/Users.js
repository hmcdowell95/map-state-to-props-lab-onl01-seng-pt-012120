import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
    {this.props.users.map(x => <li>{x.username}</li>)}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users,
  userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
