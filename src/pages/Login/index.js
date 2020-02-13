import React, { useState }from 'react';
import { authorizationApi } from '../../helpers/callToApi';

export default function Login() {
  return (
    <div>
      <button onClick={(e) => {e.preventDefault();authorizationApi() }}>Entrar</button>
    </div>
  );
}
