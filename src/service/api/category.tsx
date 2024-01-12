import api from "../axios.jsx";

const useCategoriesApi = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const getAllCategories = async () => api.get("/category", config);

  return { getAllCategories };
};

export default useCategoriesApi;
