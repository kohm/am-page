import * as React from 'react';

interface Props {
    label: string;
}

const Input: React.FC<Props> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input/>
    </div>
  );
};

export default Input;
