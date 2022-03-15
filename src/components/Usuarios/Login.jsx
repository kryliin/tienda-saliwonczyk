import React from 'react';
import './Login.css';

export default function Login() {
    return(
      <div className="login-wrapper">
        <h1>Por favor Ingrese</h1>
        <form>
          <label>
            <p>Uusario</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    )
  }