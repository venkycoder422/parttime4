
import React from 'react';
import '../client-css/login.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleOauth from '../../components-Oauth/Google'


export const Loginform = () => {
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [data, setData] = React.useState([]);
    
    const addDataHandler = (e) => {
        e.preventDefault();
        const payload = {
            email: email,
            password: password,
            id: data.length
        };
        setData([...data, payload]);
        
    };
    
    return (
        <>
            <h1>LOGIN WITH EMAIL</h1>
            <div className="login-form">
                <div>
                    {/* <form>
                        <label>Enter email</label>
                        <input type="email" value={email}
                            onChange={(e) => setemail(e.target.value)}></input>
                        <label>Enter password</label>
                        <input type="password" value={password}
                            onChange={(e) => setpassword(e.target.value)}></input>
                        <input type="submit" value="Submit" onClick={addDataHandler}></input>
                    </form> */}

                    <GoogleOAuthProvider clientId="490174809580-66dq2meojcgpga5u8hq6pj08e6fnl75k.apps.googleusercontent.com">
                        <GoogleOauth />
                    </GoogleOAuthProvider>
        
                </div>
            </div>
        </>
    )
}

