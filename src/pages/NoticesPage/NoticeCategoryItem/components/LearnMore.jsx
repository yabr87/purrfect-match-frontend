import React, { useState } from 'react';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon/Icon';
import { useTranslation } from 'react-i18next';

const LearnMore = ({ onButtonClick }) => {
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const { t } = useTranslation();

  return (
    <Button
      style={{
        width: '100%',
        marginTop: '20px',
        transition: 'stroke 250ms ease',
      }}
      onMouseEnter={() => setIsHoveredOrFocused(true)}
      onMouseLeave={() => setIsHoveredOrFocused(false)}
      onFocus={() => setIsHoveredOrFocused(true)}
      onBlur={() => setIsHoveredOrFocused(false)}
      onClick={onButtonClick}
    >
      {t('Learn_more')}
      {isHoveredOrFocused && (
        <Icon id="paw" f="currentColor" w="24" h="24" s="none" />
      )}
    </Button>
  );
};

export default LearnMore;
