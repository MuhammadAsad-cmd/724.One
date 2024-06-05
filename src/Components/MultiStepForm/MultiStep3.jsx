import React from "react";

const MultiStep3 = ({ prevStep, formData, submitForm }) => {
  const { firstName, lastName, email, phone } = formData;

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">Step 3: Review Your Details</h2>
        <p className="h-10 w-full max-w-[400px] mt-5 p-2 text-black border outline-none rounded-xl border-black">
          First Name: {firstName}
        </p>
        <p className="h-10 w-full max-w-[400px] mt-5 p-2 text-black border outline-none rounded-xl border-black">
          Last Name: {lastName}
        </p>
        <p className="h-10 w-full max-w-[400px] mt-5 p-2 text-black border outline-none rounded-xl border-black">
          Email: {email}
        </p>
        <p className="h-10 w-full max-w-[400px] mt-5 p-2 text-black border outline-none rounded-xl border-black">
          Phone: {phone}
        </p>
        <div className="flex items-center gap-10 mt-5">
          <button
            className="p-1 bg-green-500 rounded-lg flex items-center justify-center text-white"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            className="p-1 bg-slate-600 rounded-lg flex items-center justify-center text-white"
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default MultiStep3;
