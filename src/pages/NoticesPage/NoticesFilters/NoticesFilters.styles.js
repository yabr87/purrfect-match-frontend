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
  height: 118px;
  background: #ffffff;
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
`;
