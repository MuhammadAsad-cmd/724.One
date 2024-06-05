import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CreateModal from "./CreateModal";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const CrudTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState({ title: "", body: "" });

  const fetchData = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}?_page=${page}&_limit=10`);
      setData((prevData) =>
        page === 1 ? response.data : [...prevData, ...response.data]
      );
      setTotalPages(Math.ceil(response.headers["x-total-count"] / 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);

  const handleCreate = async (newItem) => {
    setLoading(true);
    try {
      const response = await axios.post(API_URL, newItem);
      setData([...data, response.data]); // Add new data to the end
    } catch (error) {
      console.error("Error creating data:", error);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  const handleUpdate = async (id, updatedItem) => {
    setLoading(true);
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedItem);
      setData(data.map((item) => (item.id === id ? response.data : item)));
    } catch (error) {
      console.error("Error updating data:", error);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentPost.id) {
      handleUpdate(currentPost.id, currentPost);
    } else {
      handleCreate(currentPost);
    }
  };

  const handleOpenModalForCreate = () => {
    setCurrentPost({ title: "", body: "" });
    setIsModalOpen(true);
  };

  const handleOpenModalForEdit = (post) => {
    setCurrentPost(post);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-2xl font-bold">CRUD Table with Pagination</h1>
        <button
          onClick={handleOpenModalForCreate}
          className="flex items-center justify-center px-5 bg-blue-500 rounded-sm text-white"
        >
          Create New Post
        </button>
      </div>
      <table className="border">
        <thead>
          <tr className="border">
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border">
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button onClick={() => handleOpenModalForEdit(item)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        {loading && <p>Loading...</p>}
        {page < totalPages && !loading && (
          <button
            onClick={handleLoadMore}
            className="bg-yellow-700 p-5 flex items-center justify-center text-white rounded-md"
          >
            Load More
          </button>
        )}
      </div>

      <CreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        post={currentPost}
        onInputChange={handleInputChange}
      />
    </>
  );
};

export default CrudTable;
