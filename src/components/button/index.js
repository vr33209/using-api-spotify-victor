import React from 'react';

// import { Container } from './styles';

export default function button({ title, onClick, onBlur, onMouseEnter,buttonType, disabled }) {
  const className = ["button", buttonType, disabled].join(' ')
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={className}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
    >
      <span>{title}</span>
    </button>
  );
}
