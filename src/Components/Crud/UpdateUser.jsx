import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Features/usersSlice";

const UpdateUser = ({ user, setEditingUserId }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateUser({ id: user.id, name, email }));
    setEditingUserId(null);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black mt-2"
      />
      <button
        className="flex items-center justify-center h-10 w-full bg-yellow-400 mt-5 rounded-xl text-white text-lg font-semibold"
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        className="flex items-center justify-center h-10 w-full bg-gray-400 mt-5 rounded-xl text-white text-lg font-semibold"
        onClick={() => setEditingUserId(null)}
      >
        Cancel
      </button>
    </div>
  );
};

export default UpdateUser;
