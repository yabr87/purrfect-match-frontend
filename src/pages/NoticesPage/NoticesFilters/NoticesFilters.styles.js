import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: 'relative';
`;

export const FilterOptions = styled.div`
  position: absolute;
  padding: 8px;
  top: 100%;
  right: 0;
  z-index: 1;
  width: 152px;
  background: #ffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
`;

export const FiltersTitle = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #54adff;
  margin-bottom: 8px;
`;

export const Item = styled.span`
  margin-left: 8px;
`;

export const FiltersItems = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  max-height: 32px;
  background: #CCE4FB;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const ContainerItem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px;
gap: 10px;
background: #CCE4FB;
color: #54ADFF;
border-radius: 20px;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`;



export const FilterChose = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
font-style: normal;
font-weight: 400;
font-size: 12px;
color: #54ADFF;
`;


