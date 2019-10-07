import React, { Component } from 'react';
import UserList from './userList';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

const mapStateToProps = (state) => {
  return{
    users : state.users
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => { dispatch(fetchUsers()) }
});

class App extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <UserList users = {this.props.users} />
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
