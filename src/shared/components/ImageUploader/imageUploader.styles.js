import styled from 'styled-components';

export const ImageWrapper = styled.div`
    
    width: 112px;
    height: 112px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.lightBlue};
    border-radius: 20px;
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
`;

export const PhotoWrapper = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 112px;`

export const Photo = styled.img`
 width: 100%;
  height: 100%;
  object-fit: cover;
`