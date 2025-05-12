import React from "react";

type TodoFormProps = {
  onSubmit: (task: string) => void;
};

const TodoForm = (props: TodoFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget) return;
    // Handle form submission logic here
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const task = formData.get("task")?.toString() || "";
    props.onSubmit(task);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          name="task"
          className="p-2 border w-full border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter a new task"
        />
        <button
          className="p-2 bg-blue-600 text-nowrap rounded hover:bg-blue-700 transition duration-200"
          type="submit"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
