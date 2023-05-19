import React, { useState } from 'react';

export default function TestCounter() {
  const [count, setCount] = useState(0);
  const onClickBtn = () => {
    setCount(cur => cur + 1);
  };

  return <button onClick={onClickBtn}>현재 숫자: {count}</button>;
}
