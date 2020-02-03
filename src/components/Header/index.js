import React from 'react';
import Button from '../button'

export default function Header() {
  return (
   <header className="header">
     <Button title="Listener Music" buttonType="primary"/>
     <h1>Welcome</h1>
     <Button title="Albuns" buttonType="transparent"/>
   </header>
  );
}
