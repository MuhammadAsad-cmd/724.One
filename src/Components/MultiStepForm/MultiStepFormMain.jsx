import React, { useState } from "react";
import MultiStep1 from "./MultiStep1";
import MultiStep2 from "./MultiStep2";
import MultiStep3 from "./MultiStep3";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = () => {
    alert("Form Submitted: " + JSON.stringify(formData, null, 2));
  };

  switch (step) {
    case 1:
      return (
        <MultiStep1
          nextStep={nextStep}
          setFormData={setFormData}
          formData={formData}
        />
      );
    case 2:
      return (
        <MultiStep2
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          formData={formData}
        />
      );
    case 3:
      return (
        <MultiStep3
          prevStep={prevStep}
          formData={formData}
          submitForm={submitForm}
        />
      );
    default:
      return <div>Invalid Step</div>;
  }
};

export default MultiStepForm;
