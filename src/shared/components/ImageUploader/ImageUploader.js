import React, { useRef } from 'react';
import css from "./imageUploader.module.css";

const handleFileUpload = event => {
    console.log(event.target.files[0].name);
};

const ImageUploader = ({handleChange, ...props}) => {
    //const id = useMemo(()=> nanoid(), []);
    const inputRef = useRef(null);

    return (
        <div>
            <input
                ref={inputRef}
                onChange={handleFileUpload}
                type="file"
                style={{ display: "none" }}
                accept="image/png, image/gif, image/jpeg"
                multiple={false}
            />
            <button className={css.btnImg} onClick={() => inputRef.current.click()}>+</button>
        </div>
    )
}

export default ImageUploader;
