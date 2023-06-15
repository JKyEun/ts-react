import React, { useState } from 'react';

export default function TestCounter() {
  const [count, setCount] = useState<number>(0);
  const onBtnClick = () => {
    setCount((cur) => cur + 1);
  };

  return <button onClick={onBtnClick}>현재 숫자: {count}</button>;
}
