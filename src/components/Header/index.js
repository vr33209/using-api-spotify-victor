import React from 'react';
import Button from '../button'

export default function Header() {
  return (
   <header className="header">
     <Button title="Ouvir Musicas" buttonType="primary"/>
     <h1>Bem-vindo</h1>
     <Button title="Albuns" buttonType="transparent"/>
   </header>
  );
}
