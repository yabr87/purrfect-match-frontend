import { Field } from 'formik';
import styled from 'styled-components';

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 44px 12px 16px;
  width: 100%;
  height: 95vh;

  @media ${props => props.theme.media.tab} {
    height: fit-content;
    padding: 20px 32px;
  }
`;

export const EditContent = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  @media ${props => props.theme.media.tab} {
    height: fit-content;
  }
`;

export const EditTitle = styled.p`
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 1.35;

  color: ${props => props.theme.colors.textColor};

  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.36;
    margin: 0;
  }
`;

export const EditWrapper = styled.div`
  @media ${props => props.theme.media.tab} {
    display: flex;
    margin-bottom: 32px;

    @media ${props => props.theme.media.tab} {
      gap: 24px;
    }
  }
`;

export const EditLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${props => props.theme.fontWeiths.semiBold};
  font-size: 14px;
  line-height: 1.3;

  color: ${props => props.theme.colors.textColor};

  input[type='range'] {
    -webkit-appearance: none; /* Убирает стандартные стили для WebKit браузеров */
    -moz-appearance: none; /* Убирает стандартные стили для Firefox */
    width: 100%;
    height: 10px;
    background-color: ${props => props.theme.colors.backgroundModal};
    border-radius: 40px;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  input[type='range']::-moz-range-thumb {
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  input[type='range']:hover {
    opacity: 1;
  }

  input[type='range']::-webkit-slider-thumb:hover {
    background-color: ${props => props.theme.colors.link};
  }

  input[type='range']::-moz-range-thumb:hover {
    background-color: ${props => props.theme.colors.link};
  }

  @media ${props => props.theme.media.tab} {
    font-size: 16px;
  }
`;

export const EditField = styled(Field)`
  padding: 10px 16px;
  width: 100%;
  height: 24px;
  margin-top: 4px;

  font-family: ${props => props.theme.fonts.main};
  font-size: 12px;
  line-height: 150%;

  ::placeholder {
    font-family: ${props => props.theme.fonts.main};
  }

  color: ${props => props.theme.colors.inputText};
  background: ${props => props.theme.colors.backgroundModal};
  border-radius: ${props => props.theme.radius.small};
  border: ${props =>
    props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
  outline: none;

  @media ${props => props.theme.media.tab} {
    margin-top: 8px;
    height: 40px;
    padding: 12px 16px;
    font-size: 14px;
  }
`;

export const EditText = styled(Field)`
  display: block;
  padding: 8px 16px 10px;
  width: 100%;
  height: 92px;
  resize: none;
  margin-top: 4px;

  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.04em;
  font-family: ${props => props.theme.fonts.main};

  background: ${props => props.theme.colors.backgroundModal};
  color: ${props => props.theme.colors.inputText};
  border: ${props =>
    props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};

  border-radius: ${props => props.theme.radius.small};

  ::placeholder {
    font-family: ${props => props.theme.fonts.main};

    @media ${props => props.theme.media.tab} {
      margin-top: 8px;
      border: ${props =>
        props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
      padding-top: 12px 16px 10px;
    }
  }

  @media ${props => props.theme.media.tab} {
    margin-top: 8px;
    height: ${props =>
      props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
    padding-top: 12px 16px 10px;
  }
`;

export const EditBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  margin-top: 12px;
  gap: 8px;

  @media ${props => props.theme.media.tab} {
    justify-content: ${props => props.category !== 'my-pet' && 'center'};
    flex-direction: row;
    bottom: 20px;
    right: 32px;
  }
`;

export const ImageCategoryEdit = styled.p`
  position: absolute;
  width: fit-content;
  height: 32px;
  left: 0;
  top: 12px;
  display: flex;
  padding: 11px 17px;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.lightBlue};
  border-radius: ${props =>
    ` 0px ${props.theme.radius.small} ${props.theme.radius.small}  0px `};
`;

export const EditboxLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${props => props.theme.media.tab} {
    gap: 20px;
    width: 240px;
  }
`;

export const EditboxRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 12px;

  @media ${props => props.theme.media.tab} {
    flex-grow: 1;
  }
`;
