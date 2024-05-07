import { useState } from 'react';

const ShortCircuitOverview = () => {
  //false
  const [text, setText] = useState('');
  //truth
  const [name, setName] = useState('susan');

  const codeExample = text || 'hello world';

  return (
    <div>
      <h4>Falsy or :{text || 'hello world'}</h4>
      <h4>Falsy and :{text && 'hello world'}</h4>
      <h4>truthy or :{name || 'hello world'}</h4>
      <h4>truthy and :{name && 'hello world'}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
