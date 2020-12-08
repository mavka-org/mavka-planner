import React from 'react'
import Login from './Login'
import {createUserWithEmailAndPassword} from '../../services/Firebase/Authenticate'

class LoginPage extends React.Component{

    handleTelegramResponse = (response) => {
        var email = response.id + '@mavka.org'
        var password = response.id
        password = password.toString()
        createUserWithEmailAndPassword(email, password)
    };

    render(){
        return(
            <Login handleTelegramResponse={this.handleTelegramResponse}/>
        )
    }
}

export default LoginPage
