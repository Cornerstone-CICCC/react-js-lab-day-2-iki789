type TodoTaskProps = {
  index: number;
  task: string;
  onDelete: (index: number) => void;
};

const TodoTask = (props: TodoTaskProps) => {
  return (
    <div>
      <div className="p-3 px-4 bg-gray-500 text-white flex justify-between items-center mb-2">
        <p className="mb-0">{props.task}</p>
        <button
          className="bg-red-400 p-2"
          onClick={() => props.onDelete(props.index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
