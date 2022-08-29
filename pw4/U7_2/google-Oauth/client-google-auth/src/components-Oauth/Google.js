import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function GoogleOauth() {
    const [credentialResponse, setCridentialResponse] = React.useState({})
    const Navigate = useNavigate();
    return (
        <div>
        <GoogleLogin
            onSuccess={credentialResponse => {
                setCridentialResponse(credentialResponse);
                if(credentialResponse){
                    alert("Sucessfully login!");
                    Navigate("/home");
                    return 
                    
                }
                
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap

        />
        {/* <div>
            <pre>
                {JSON.stringify(credentialResponse,null,2)}
            </pre>
        </div> */}
        </div>
    );
}

