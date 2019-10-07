import React, { Component } from 'react';

class UserList extends Component {

    renderUser(user){
        return(
            <div key = { user.id } className = "card card-block">
                <h4 className = "card-title">{user.name}</h4>
                <p className = "card-text">Cheese Factory</p>
                <a className = "btn btn-primary">Email</a>
            </div>
        );
    }

    render(){
        return(
            <div>
                {this.props.users.map((user) => this.renderUser(user))}
            </div>
        );
    }
}

export default UserList;