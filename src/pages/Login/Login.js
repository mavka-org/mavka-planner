import React from 'react'
import LoginUI from './LoginUI'
import {createUserWithEmailAndPassword} from '../../services/Firebase/Authenticate'

class Login extends React.Component{

    handleTelegramResponse = (response) => {
        var email = response.id + '@mavka.org'
        var password = response.id
        password = password.toString()
        console.log('LOGIC', email, password)
        createUserWithEmailAndPassword(email, password)
    };

    render(){
        return(
            <LoginUI handleTelegramResponse={this.handleTelegramResponse}/>
        )
    }
}

export default Login