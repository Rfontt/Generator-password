import React, { useState } from 'react';
import '../styles/generatePassword.css';
import '../styles/global.css';
import Logo from '../images/logo.png';

let charset = '1234567890ABCDEFGHIJKLMNOPQWYXVUabcdekapdnchahwudncdsaiwuuancmoaaiudwyeba@$@akiehacgwfancnahgdtwbcbbbccahwxykajs';

export default function GeneratePassword() {
  const [size, setSize] = useState('');
  const [password, setPassword] = useState('');

  function SubmitCaractersSize() {
    let pass = '';
    for (var i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
      setPassword(pass);
    }
  }

  return (
    <div className="container">
      <img src = {Logo} alt = "logo" id = "logo"/>
      <h1> {size} caracteres </h1>

      <div className="area">
        <main>
          <input placeholder = "Digite o tamanho de caracteres" type = "number"
          value = {size} onChange = {event => setSize(event.target.value)}
          />
          <button onClick={SubmitCaractersSize}> Submeter </button>
        </main>

        <div className = "password">
          <h1> {password} </h1>
        </div>
      </div>
    </div>
  );
}
