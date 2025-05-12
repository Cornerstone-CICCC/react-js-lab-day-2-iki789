import { useEffect } from "react";
import { useAuth } from "../context/authContext/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const authContext = useAuth();
  const { name, setName } = authContext;

  useEffect(() => {
    if (name) {
      navigate("/dashboard");
    }
  }, [name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    setName(formData.get("name")?.toString() || "");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4 text-3xl font-bold">Hi, What's your name?</h1>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="p-2 border w-full border-gray-600 rounded bg-gray-700 text-white"
            placeholder="Enter your name"
            name="name"
            required
          />
          <button
            className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
