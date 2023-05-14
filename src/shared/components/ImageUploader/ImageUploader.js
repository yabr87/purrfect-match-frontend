import React, { useRef, useState } from 'react';
import { FileInput, ImageContainer } from './imageUploader.styles';


const ImageUploader = ({photo, photoPlaceholder, name, onChange, handleReset, ...props}) => {
    const inputRef = useRef(null);
    const [photoSrc, setPhotoSrc] = useState(photo ? photo : photoPlaceholder);

    const handleFileUpload = event => {
      //const r = URL.createObjectURL(event.target.files[0]);
      if (FileReader && event.target.files[0] && event.target.files.length) {
        const fr = new FileReader();
        fr.onload = function () {
          setPhotoSrc(fr.result);
          onChange({...event.target, ["target"]: {name: name, value: fr.result}});
        }
        fr.readAsDataURL(event.target.files[0]);
      }
    };

    return (
        <ImageContainer>
          <FileInput>
            <input
                ref={inputRef}
                onChange={handleFileUpload}
                type="file"
                accept="image/png, image/gif, image/jpeg"
                multiple={false}
            />
          </FileInput>

          <a onClick={() => inputRef.current.click()}>
              <img src={photoSrc} alt=""/>
          </a>
        </ImageContainer>
    )
}

export default ImageUploader;
