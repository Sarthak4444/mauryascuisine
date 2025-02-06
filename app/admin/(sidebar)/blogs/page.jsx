"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "../../../../hooks/useAdminAuth";

function Page() {
  const router = useRouter();
  const { user, loading } = useAdminAuth();
  const [blogs, setBlogs] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: "", img: "", content: "" });
  const [submitting, setSubmitting] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      setFetching(true);
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setFetching(false);
      }
    }

    if (!loading && user) {
      fetchBlogs();
    } else if (!loading && !user) {
      router.push("/admin");
    }
  }, [loading, user, router]);

  const handleAddBlogClick = () => {
    setIsModalOpen(true);
    setEditMode(false);
  };

  const handleEditBlogClick = (blog) => {
    setNewBlog({ title: blog.title, img: blog.img, content: blog.content });
    setEditMode(true);
    setCurrentBlogId(blog._id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setError(null);
    setNewBlog({ title: "", img: "", content: "" });
    setCurrentBlogId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmitBlog = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const method = editMode ? "PUT" : "POST";
      const url = editMode ? `/api/blog/${currentBlogId}` : "/api/blog";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (!response.ok) throw new Error(editMode ? "Failed to update blog" : "Failed to submit blog");

      setNewBlog({ title: "", img: "", content: "" });
      handleModalClose();
      window.location.reload();
    } catch (error) {
      setError(error.message);
      console.error(editMode ? "Error updating blog:" : "Error submitting blog:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="absolute inset-0">
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="w-16 h-16 border-t-4 border-b-4 border-orange-500 border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 admin">
      {fetching ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-t-transparent border-orange-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : blogs.length > 0 ? (
        <>
          <div className="flex justify-items-end items-center w-full mb-4">
            <button
              onClick={handleAddBlogClick}
              className="bg-[#d88728] hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2"
            >
              Add Blog
            </button>
          </div>
          <div className="overflow-scroll">
            <table className="w-full border-collapse border border-gray-500">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-500 p-2">Serial</th>
                  <th className="border border-gray-500 p-2">ID</th>
                  <th className="border border-gray-500 p-2">Title</th>
                  <th className="border border-gray-500 p-2">Edit</th>
                </tr>
              </thead>
              <tbody>
                {blogs
                  .slice()
                  .reverse()
                  .map((blog, index) => (
                    <tr key={blog._id} className="hover:bg-gray-100">
                      <td className="border border-gray-500 p-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border border-gray-500 p-2 text-center">
                        {blog._id}
                      </td>
                      <td className="border border-gray-500 p-2 text-center">
                        {blog.title}
                      </td>
                      <td className="border border-gray-500 p-2 text-center">
                        <div className="flex flex-row justify-center items-center gap-4">
                          <button
                            onClick={() => handleEditBlogClick(blog)}
                            className="p-2 bg-green-500 text-black font-bold rounded-2xl w-10 h-10 text-center"
                          >
                            <i className="fa-solid fa-pen-to-square text-lg"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-items-end items-center w-full">
            <button
              onClick={handleAddBlogClick}
              className="bg-[#d88728] hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2"
            >
              Add Blog
            </button>
          </div>
          <h1 className="text-5xl font-bold mt-8 text-center">No blogs</h1>
        </>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-96">
            <h2 className="text-2xl font-bold">{editMode ? "Edit Blog" : "Add New Blog"}</h2>
            <div className="mb-2">
              <label className="block mb-2 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block mb-2 font-medium">Image URL</label>
              <input
                type="text"
                name="img"
                value={newBlog.img}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block mb-2 font-medium">Content</label>
              <textarea
                name="content"
                rows="4"
                value={newBlog.content}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleModalClose}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitBlog}
                className="bg-[#d88728] text-white px-4 py-2 rounded"
                disabled={submitting}
              >
                {submitting ? (
                  <div className="w-4 h-4 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
