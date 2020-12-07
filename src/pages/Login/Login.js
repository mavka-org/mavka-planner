import React from 'react'
import LoginUI from './LoginUI'
import Firebase from '../../services/firebase'

class Login extends React.Component{

    handleTelegramResponse = (response) => {
        var email = response.id + '@mavka.org'
        var password = response.id
        console.log(email, password)
    };

    render(){
        return(
            <LoginUI handleTelegramResponse={this.handleTelegramResponse}/>
        )
    }
}

export default Login