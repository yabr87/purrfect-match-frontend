import styled from 'styled-components';

export const ImageContainer = styled.div`
    
    width: 182px;
    height: 182px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #54ADFF;
    background: #CCE4FB;
    border-radius: 40px;
    border: none;
    overflow: hidden;
    
`;

export const FileInput = styled.input`
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
`