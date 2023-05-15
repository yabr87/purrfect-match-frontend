import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { FileInput, ImageContainer } from './imageUploader.styles';

const ImageUploader = () => {
  const [file, setFile] = useState('');
  const { setFieldValue } = useFormikContext();

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFieldValue('photo', selectedFile);
  };

  const handleReset = () => {
    setFile('');
    setFieldValue('photo', '');
  };

  return (
    <ImageContainer>
      <FileInput
        type="file"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        multiple={false}
      />
      {file && (
        <div>
          <img src={URL.createObjectURL(file)} alt="Selected file" />
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </ImageContainer>
  );
};

export default ImageUploader;
