import React, { ChangeEvent, useState } from 'react';
import List from './List';
import { Task } from './types/types';

export default function Todo() {
  const [todo, setTodo] = useState<Task[]>([]);
  const [inputText, setInputText] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addTodo = (): void => {
    const copyArr: Task[] = [...todo];
    if (inputText !== '') {
      copyArr.push({ task: inputText, done: false });
      setTodo(copyArr);
      setInputText('');
    }
  };

  return (
    <div>
      <input value={inputText} onChange={onInputChange} type='text' />
      <button onClick={addTodo}>할 일 추가</button>
      {todo.map((el, idx) => (
        <List key={idx} task={el.task} done={el.done} />
      ))}
    </div>
  );
}
