import React, { useRef } from 'react';
import {FileInput, BtnImg } from "./imageUploader.styles";

const handleFileUpload = event => {
    console.log(event.target.files[0].name);
};

const ImageUploader = ({handleChange, ...props}) => {
    //const id = useMemo(()=> nanoid(), []);
    const inputRef = useRef(null);
    let imgSrc = null;

    return (
        <div>
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
            { imgSrc ? <img src={imgSrc}/>
              : <span>+</span>
            }
          </a>

        </div>
    )
}

export default ImageUploader;
