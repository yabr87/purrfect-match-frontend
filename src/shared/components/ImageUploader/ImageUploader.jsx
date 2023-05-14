import React, { useState } from 'react';
import {  FileInput, ImageContainer } from './imageUploader.styles';

const ImageUploader = ({ field, onChange }) => {
  const [file, setFile] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    onChange(selectedFile);
  };

  const handleReset = () => {
    setFile(null);
    onChange(null);
  };

  return (
    <ImageContainer>
      <FileInput type="file" onChange={handleFileChange} 
                accept="image/png, image/gif, image/jpeg"
                multiple={false}/>
      {file && (
        <div>
          <img src={URL.createObjectURL(file)} alt="Selected file" />
          <button type="reset" onClick={handleReset}>Reset</button>
        </div>
      )}
    </ImageContainer>
  );
};

export default ImageUploader;