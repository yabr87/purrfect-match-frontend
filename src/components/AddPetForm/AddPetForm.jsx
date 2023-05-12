import { Form, Formik } from "formik";
import { useState } from "react";


const AddPetForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (values) => {
        console.log(values);
        // Отправляем данные формы на бекенд
        // Переходим на страницу UserPage або NoticesPage
    };
    

    return (
        <Formik>
            <Form>
                {/* <StepOne />
    <StepTwo />
    <StepThree /> */}
            </Form>
        </Formik>
    );
};

export default AddPetForm;