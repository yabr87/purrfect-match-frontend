import React from 'react';
import { MainTitle } from './Title.styles';

const Title = ({ children, ...rest }) => (
  <MainTitle {...rest}>{children}</MainTitle>
);

export default Title;

// Приклад використання
// десь рендеримо компонент :

// <Title>якийсь текст</Title>

// за замовчуванням стилі йдуть
// font-weight: '700';  назви пропсів: weight, tabWeight, deskWeight
// font-size: '24px'; на таблетці і десктопі '48px'; назви пропсів: size, tabSize, deskSize
// line-height: '1.375'; назви пропсів: line, tabLine, deskLine
// color: '#111111'; назви пропсів: color, tabColor, deskColor

// якщо потрібно змінити щось пишемо як пропси наприклад
// <Title deskWeight="800" tabSize="20px" color="white">якийсь текст</Title>
