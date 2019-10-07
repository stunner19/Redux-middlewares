import React, { Component } from 'react';

class UserList extends Component {

    renderUser(user){
        return(
            <div key = { user.id } className = "card card-block">
                <h4 className = "card-title">{user.name}</h4>
                <p className = "card-text">{user.company.name}</p>
                <a className = "btn btn-primary" href = {user.website}>Website</a>
            </div>
        );
    }

    render(){
        return(
            <div className = "user-list">
                {this.props.users.map((user) => this.renderUser(user))}
            </div>
        );
    }
}

export default UserList;