import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateUser from "./UpdateUser";
import { deleteUser } from "../../Features/usersSlice";

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [editingUserId, setEditingUserId] = useState(null);

  return (
    <>
      <ul className="flex-col flex items-center w-full justify-center mt-6">
        <h2 className="text-2xl font-semibold">User List</h2>
        {users.map((user) => (
          <li
            key={user.id}
            className="border w-full max-w-[600px] mb-4 p-4 rounded-lg"
          >
            {editingUserId === user.id ? (
              <UpdateUser user={user} setEditingUserId={setEditingUserId} />
            ) : (
              <>
                <div>
                  <label>Name:</label>
                  <input
                    value={user.name}
                    readOnly
                    className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black"
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    value={user.email}
                    readOnly
                    className="h-10 w-full p-2 text-black border outline-none rounded-xl border-black"
                  />
                </div>

                <button
                  className="flex items-center justify-center h-10 w-full bg-red-400 mt-5 rounded-xl text-white text-lg font-semibold"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  Delete
                </button>
                <button
                  className="flex items-center justify-center h-10 w-full bg-yellow-400 mt-5 rounded-xl text-white text-lg font-semibold"
                  onClick={() => setEditingUserId(user.id)}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
