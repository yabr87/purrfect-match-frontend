import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    gap: 12px;
`;

export const Step = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
    color: ${(props) => {
        if (props.active) {
            return '#54ADFF'; 
        } else if (props.disabled) {
            return '#888888'; 
        } else {
            return '#00C3AD';
        }
    }}`;
