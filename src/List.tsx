import React from 'react';
import { Task } from './types/types';

export default function List({ task, done }: Task) {
  return (
    <>
      <div>할 일 : {task}</div>
      <div>완료 여부 : {done ? '완료' : '미완료'}</div>
    </>
  );
}
