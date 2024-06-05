import React from "react";
import { useForm } from "react-hook-form";

const MultiStep2 = ({ nextStep, prevStep, setFormData, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-semibold">Step 2: Contact Details</h2>
          <div>
            <label>Email</label>
            <input
              className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black"
              {...register("email", { required: true })}
            />
            {errors.email && <p>Email is required</p>}
          </div>
          <div>
            <label>Phone Number</label>
            <input
              className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black"
              {...register("phone", { required: true })}
            />
            {errors.phone && <p>Phone Number is required</p>}
          </div>
          <div className="flex items-center justify-center gap-5 mt-5">
            <button
              type="button"
              onClick={prevStep}
              className="p-1 bg-green-500 rounded-lg flex items-center justify-center text-white"
            >
              Back
            </button>
            <button
              type="submit"
              className="p-1 bg-slate-600 rounded-lg flex items-center justify-center text-white"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MultiStep2;
