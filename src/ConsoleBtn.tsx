import React from 'react';

export default function ConsoleBtn() {
  const onClickBtn = () => {
    console.log('Clicked!');
  };

  return <button onClick={onClickBtn}>Click me!</button>;
}
