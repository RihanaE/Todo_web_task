import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="container" onSubmit={(e) => handleAdd(e)}>
        
      <div className="align-items-center row d-flex justify-content-evenly  ">
        
        <span className="col-11 text-center">
          <input
            type="input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task"
            className="form-control m-4 shadow-lg"
          />
        </span>

        <span className="col-lg-1 text-center">
          <button
            type="submit"
            className="btn btn-primary m-4 shadow-lg rounded"
          >
            Go
          </button>
        </span>
      </div>
    </form>
  );
};

export default InputField;
