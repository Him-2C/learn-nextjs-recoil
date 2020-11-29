import React from 'react';
import {useRecoilState} from 'recoil';
import {textState} from '../store/textState';

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      Echo: {text}
    </div>
  );
};

export default TextInput;
