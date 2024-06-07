import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Button, Header } from 'semantic-ui-react';

function Login() {

    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    const login = async () => {
        await oktaAuth.signInWithRedirect();
    };
    return (
        <div><Button id="login-button" primary onClick={login}>Login</Button></div>
    )
}

export default Login