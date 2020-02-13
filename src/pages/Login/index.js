import React from 'react';
import { authorizationApi } from '../../helpers/callToApi';
import Button from '../../components/button'
export default function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <Button title="Entrar" buttonType="primary" onClick={(e) => {e.preventDefault();authorizationApi() }}/>
      </div>
    </div>
  );
}
