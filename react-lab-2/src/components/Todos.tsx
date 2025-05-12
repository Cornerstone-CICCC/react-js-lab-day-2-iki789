import TodoForm from "./TodoForm";
import TodoTask from "./TodoTask";
import { useAuth } from "../context/authContext/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const { name, setName } = useAuth();
  const navigate = useNavigate();
  if (!name) {
    // alert("Please login to access this page");
  }

  useEffect(() => {
    if (!name) {
      setName("Iki");
    }
  }, []);

  const handleLogout = () => {
    setName("");
    navigate("/");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <h1 className="mb-4 text-3xl font-bold">Welcome, {name}!</h1>
        <button
          onClick={handleLogout}
          className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
        >
          Logout
        </button>
      </div>
      <div className="mb-5">
        <p>Have a great productive day!</p>
      </div>
      <div className="mb-5">
        <TodoTask />
      </div>
      <TodoForm />
    </div>
  );
};

export default Todos;
