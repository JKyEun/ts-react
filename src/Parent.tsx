import Children from './Children';
import { Info } from './types/types';

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
