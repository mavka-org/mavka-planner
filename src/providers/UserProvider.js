import React, { Component, createContext } from "react";
import { auth } from "./../services/Firebase/firebase";
import { signInAnonymously } from './../services/Firebase/Authenticate';

export const UserContext = createContext({ user: undefined });

class UserProvider extends Component {
    state = {
        user: undefined
    };

    componentDidMount = () => {
        auth.onAuthStateChanged(userAuth => {
            this.setState({ user: userAuth });
        });
    };
    render() {

        if(this.state.user !== undefined && !this.state.user){
          signInAnonymously()
        }

        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
export default UserProvider;
