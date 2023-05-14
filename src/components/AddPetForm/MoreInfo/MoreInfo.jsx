import { Field } from "formik";
import { useState } from "react";
import ImageUploader from "shared/components/ImageUploader";
import { FormLabel } from "../AddPetForm.styles";

const MoreInfo = ({ option }) => {
    const [checkedValue, setCheckedValue] = useState('');

    const handleChange = (e) => {
        setCheckedValue(e.target.value);
    };
    
    return (
        <>
            <FormLabel>
                {option === 'my-pet' ? <span>Add photo</span> : <span>Load the pet&#96;s image:</span>}
                <ImageUploader photo=""
                    onChange={handleChange}
                    name="photo"
                    value=''>
                </ImageUploader>
            </FormLabel>
            {option !== 'my-pet' &&
                (<>
                    <p> The Sex: </p>
                    <div role="group" aria-labelledby="choose-pet-option">
                        <label>
                            Male
                            <Field
                                type="radio"
                                name='sex'
                                value='male'
                                checked={checkedValue === 'male'}
                                onChange={handleChange}
                                onBlur={() => { }}
                            />
                        </label>
                        <label>
                            Female
                            <Field
                                type="radio"
                                name='sex'
                                value='female'
                                checked={checkedValue === 'female'}
                                onChange={handleChange}
                                onBlur={() => { }}
                            />
                        </label>
                        <FormLabel>Location
                            <Field name="location" placeholder="Type of location"
                                onChange={handleChange} />
                        </FormLabel>
                    {option === 'sell' &&
                        <FormLabel>Price
                            <Field name="price" placeholder="Type of price"
                                onChange={handleChange} />
                        </FormLabel>}
                    </div>
                </>)}
            
            <FormLabel>Comments
                <Field as="textarea" name="comments" placeholder="Type breed"
                    onChange={handleChange} />
            </FormLabel>
        </>
    );
};

export default MoreInfo;