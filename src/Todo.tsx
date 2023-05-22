import React, { useRef, useState } from 'react';
import List from './List';
import { Task } from './types/types';

export default function Todo() {
  const [todo, setTodo] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = (): void => {
    const copyArr: Task[] = [...todo];
    if (inputRef.current !== null) {
      copyArr.push({ task: inputRef.current.value, done: false });
      setTodo(copyArr);
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={addTodo}>할 일 추가</button>
      {todo.map((el, idx) => (
        <List key={idx} task={el.task} done={el.done} />
      ))}
    </div>
  );
}
