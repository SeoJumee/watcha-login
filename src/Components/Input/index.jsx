import React from 'react';
import * as S from './style';

export default function Input({ valid, type, value, onChange, placeholder }) {
  return (
    <S.Input
      valid={valid}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
