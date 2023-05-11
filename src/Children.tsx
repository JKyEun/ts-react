import { Info } from './Parent';

export default function Children({ name, age, hobbies }: Info) {
  return (
    <div>
      <h2>이름 : {name}</h2>
      <h2>나이 : {age}</h2>
      <h2>취미</h2>
      {hobbies?.map((el, idx: number) => (
        <p key={idx}>{el}</p>
      ))}
    </div>
  );
}
