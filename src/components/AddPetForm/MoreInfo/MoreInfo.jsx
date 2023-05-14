import { Field } from "formik";
import { useState } from "react";

const MoreInfo = ({ option }) => {
    const [checkedValue, setCheckedValue] = useState(null);

    const handleChange = (e) => {
        setCheckedValue(e.target.value);
    };
    
    return (
        <>
            {option !== 'your pet' &&
                (<>
                    <span> The Sex: </span>
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
                    </div>
                </>)}
            </>
    );
            
};

export default MoreInfo;