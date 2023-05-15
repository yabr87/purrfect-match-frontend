import styled from 'styled-components';

export const ImageContainer = styled.div`
    
    width: 112px;
    height: 112px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #54ADFF;
    background: #CCE4FB;
    border-radius: 40px;
    border: none;
    overflow: hidden;
    
    @media ${props => props.theme.media.tab} {
        width: 182px;
        height: 182px;
    }
`;

export const FileInput = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`