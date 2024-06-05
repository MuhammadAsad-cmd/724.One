import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Features/usersSlice";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userCount = useSelector((state) => state.users.users.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = userCount + 1;
    dispatch(addUser({ id, name, email }));
    setName("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black"
          />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center h-10 w-full bg-blue-400 rounded-xl text-white text-lg font-semibold"
        >
          Add User
        </button>
      </form>
    </>
  );
};

export default AddUser;
