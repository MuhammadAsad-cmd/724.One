import React from "react";

const CreateModal = ({ isOpen, onClose, onSubmit, post, onInputChange }) => {
  const isEdit = !!post.id;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="z-10 bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {isEdit ? "Edit Post" : "Create New Post"}
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Title:</label>
            <input
              type="text"
              value={post.title}
              onChange={onInputChange}
              name="title"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Body:</label>
            <textarea
              value={post.body}
              onChange={onInputChange}
              name="body"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {isEdit ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
