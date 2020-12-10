import React, { Component, createContext } from "react";
import {auth} from "./../services/Firebase/firebase";

export const UserContext = createContext({ user: undefined });
class UserProvider extends Component {
    state = {
        user: undefined
    };

    componentDidMount = () => {
        auth.onAuthStateChanged(userAuth => {
            console.log(userAuth)
            this.setState({ user: userAuth });
        });
    };
    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
export default UserProvider;