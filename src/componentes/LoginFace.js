import React from 'react';
import FacebookLogin from 'react-facebook-login';

function LoginFace() {
  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    
  }
  return (
    <div className='LoginFace'>
      <center><br/><br/>
      <FacebookLogin
        appId="921430355568686"
        autoLoad={false}
        fields="name,email,picture"       
        callback={responseFacebook} />     
        </center>
      </div>      
      );  
}

export default LoginFace;