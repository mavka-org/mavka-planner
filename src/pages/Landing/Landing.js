import React from 'react'
import LandingUI from './LandingUI'

class Landing extends React.Component {

    goToLogin = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <LandingUI loginFunc={this.goToLogin}/>
        )
    }
}

export default Landing