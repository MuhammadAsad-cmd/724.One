import React from "react";
import { useForm } from "react-hook-form";

const MultiStep1 = ({ nextStep, setFormData, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-semibold">Step 1: Personal Details</h2>
          <div>
            <label>First Name</label>
            <input
              className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <p>First Name is required</p>}
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <p>Last Name is required</p>}
          </div>
          <button
            type="submit"
            className="flex items-center justify-center p-2 mt-5 bg-slate-600 text-white rounded-xl"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default MultiStep1;
