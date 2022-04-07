import { ChangeEvent, MouseEvent } from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/clear.svg';

import './input-box.styles.css';

type InputBoxProps = {
  className: string;
  isSearch?: boolean ;
  placeholder?: string;
  inputValue?: string,
  hasInput: boolean,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onClearHandler: (event: MouseEvent) => void;
};

const InputBox = ({
  onChangeHandler,
  onClearHandler,
  placeholder,
  className,
  isSearch,
  inputValue,
  hasInput,
}: InputBoxProps) => (
  <div className='input-box-container'>
    <input
      className={`input-box ${className}`}
      type={isSearch ? 'search' : 'text'}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={inputValue}
    />
    {isSearch && <SearchIcon />}
    {hasInput && (
      <div onClick={onClearHandler}>
      <ClearIcon />
      </div>
    )}
  </div>
);

export default InputBox;
