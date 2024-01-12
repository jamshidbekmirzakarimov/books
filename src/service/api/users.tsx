import api from "../axios.jsx";

const useUsersApi = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const login = async (data: any) => api.post("/user/login", { ...data });
  const register = async (data: any) => api.post("/user/register", { ...data });
  const getOneUserById = async (id: any) => api.get(`/user/${id}`, config);

  return { login, register, getOneUserById };
};

export default useUsersApi;
