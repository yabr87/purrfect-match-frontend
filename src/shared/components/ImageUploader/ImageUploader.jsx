import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useFormikContext } from 'formik';
import {
  FileInput,
  ImageWrapper,
  Photo,
  PhotoWrapper,
} from './imageUploader.styles';
import Icon from '../Icon';

const ImageUploader = () => {
  const [file, setFile] = useState('');
  const { setFieldValue, values, errors } = useFormikContext();

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 3 * 1024 * 1024) {
      setFile(selectedFile);
      setFieldValue('photo', selectedFile);
    } else {
      setFile('');
      setFieldValue('photo', '');
      toast.error('Please select a file smaller than 3 MB.');
    }
  };

  useEffect(() => {
    if (values.photo && !errors.photo) {
      setFile(values.photo);
    }
  }, [values.photo, errors.photo]);

  return (
    <ImageWrapper>
      <FileInput
        type="file"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        multiple={false}
      />

      {file ? (
        <PhotoWrapper>
          <Photo src={URL.createObjectURL(file)} alt="Selected file" />
        </PhotoWrapper>
      ) : (
        <Icon id="add-photo-pet" w="48" h="48" s="#54ADFF" />
      )}
    </ImageWrapper>
  );
};

export default ImageUploader;
