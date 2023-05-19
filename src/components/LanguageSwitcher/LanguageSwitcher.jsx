import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelectorContainer, Select } from './LanguageSwither.styles';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = event => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <LanguageSelectorContainer>
      <Select onChange={changeLanguage}>
        <option value="en">Eng</option>
        <option value="ukr">Укр</option>
      </Select>
    </LanguageSelectorContainer>
  );
}

export default LanguageSwitcher;
