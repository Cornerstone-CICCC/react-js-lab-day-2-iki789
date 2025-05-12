import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoTask from "../components/TodoTask";
import { useAuth } from "../context/authContext/useAuth";

const Todos = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const { name, setName } = useAuth();
  const navigate = useNavigate();
  if (!name) {
    // alert("Please login to access this page");
    navigate("/");
  }

  const handleAddTodo = (task: string) => {
    if (task.trim()) {
      setTodos((prevState) => [...prevState, task]);
    }
  };

  const handleDeleteTodo = (index: number) => {
    setTodos((prevState) => prevState.filter((i) => i !== prevState[index]));
  };

  const handleLogout = () => {
    setName("");
    navigate("/");
  };

  return (
    <div>
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
          {todos.length > 0 ? (
            todos.map((task, index) => (
              <TodoTask
                key={crypto.randomUUID()}
                task={task}
                index={index}
                onDelete={handleDeleteTodo}
              />
            ))
          ) : (
            <p className="text-gray-500">No tasks available</p>
          )}
        </div>
        <TodoForm onSubmit={handleAddTodo} />
      </div>
    </div>
  );
};

export default Todos;
