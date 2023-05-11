import Children from './Children';

export interface Info {
  name: string;
  age: number;
  hobbies: string[];
}

export default function Parent() {
  const jke: Info = {
    name: 'jke',
    age: 27,
    hobbies: ['basketball', 'music'],
  };

  return (
    <>
      <Children name={jke.name} age={jke.age} hobbies={jke.hobbies} />
      {/* <Children {...jke} /> 이렇게도 전달 가능 */}
    </>
  );
}
