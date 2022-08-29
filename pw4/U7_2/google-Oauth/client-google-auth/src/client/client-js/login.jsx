
import React from 'react';
import '../client-css/login.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleOauth from '../../components-Oauth/Google'
export const Loginform = () => {
    return (
        <>
        <h1>LOGIN WITH EMAIL</h1>
            <div className="login-form">
                <div>
                <form>
                    <label>Enter email</label>
                    <input type="email"></input>
                    <label>Enter password</label>
                    <input type="password"></input>
                    <input type="submit" value="Submit"></input>
                </form>
               
                <GoogleOAuthProvider clientId="490174809580-66dq2meojcgpga5u8hq6pj08e6fnl75k.apps.googleusercontent.com">
                    <GoogleOauth />
                </GoogleOAuthProvider>
                </div>
            </div>
        </>
    )
}

