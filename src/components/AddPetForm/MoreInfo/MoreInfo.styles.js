import { Field } from 'formik';
import Icon from 'shared/components/Icon';
import styled from 'styled-components';

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  margin-bottom: 24px;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: ${props => props.option !== 'my-pet' && 'row'};
    gap: ${props => props.option !== 'my-pet' && '45px'};
  }

  @media screen and (min-width: 1280px) {
    gap: ${props => props.option !== 'my-pet' && '78px'};
  }
`;

export const ImageLabel = styled.label`
  display: flex;
  align-items: center;
  column-gap: 27px;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 14px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    align-items: ${props => props.option !== 'my-pet' && 'start'};
    gap: ${props => props.option !== 'my-pet' && '8px'};
    flex-direction: ${props => props.option !== 'my-pet' && 'column'};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.3;
  }
`;

export const RadioLabel = styled.p`
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.04em;
`;

export const RadioBox = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  label > svg {
    stroke: ${setFemaleIconStroke};
  }

  label:last-child > svg {
    stroke: ${setMaleIconStroke};
  }
`;

export const MoreInfoRadio = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  border-radius: 40px;

  font-weight: ${props => props.theme.fontWeiths.normal};
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.04em;

  background-color: transparent;
  color: ${props => (props.checked ? '#00C3AD' : '#888')};

  input[type='radio'] {
    position: absolute;
    height: 1px;
    width: 1px;
    opacity: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;
  }

  svg {
    stroke-width: 2px;
  }
`;

export const TextField = styled(Field)`
  display: block;
  padding: 8px 16px 10px;
  width: 100%;
  height: 92px;
  resize: none;
  margin-top: 4px;

  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.04em;

  background: ${props => props.theme.colors.backgroundModal};
  color: ${props => props.theme.colors.inputText};
  border: ${props =>
    props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
  border-radius: 20px;

  ::placeholder {
    font-family: ${props => props.theme.fonts.main};
  }

  @media ${props => props.theme.media.tab} {
    margin-top: 8px;
    border: ${props =>
      props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
    padding-top: 12px 16px 10px;
  }
`;

export const AdaptiveBoxOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${props => props.theme.media.tab} {
    gap: 48px;
  }
`;

export const AdaptiveBoxTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${props => props.theme.media.tab} {
    flex-grow: 1;
  }
`;

function setMaleIconStroke({ sex, theme }) {
  switch (sex) {
    case 'male':
      return `${theme.colors.link}`;
    default:
      return `${theme.colors.inputColor}`;
  }
}

function setFemaleIconStroke({ sex, theme }) {
  switch (sex) {
    case 'female':
      return `${theme.colors.red}`;
    default:
      return `${theme.colors.inputColor}`;
  }
}
export const IconDollar = styled(Icon)`
position: absolute;
right: 10px;
bottom: 10px;

 @media ${props => props.theme.media.tab} {
    
right: 13px;
bottom: 13px;
  }
`