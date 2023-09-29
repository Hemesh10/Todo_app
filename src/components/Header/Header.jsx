import { useState } from "react";

const Header = ({ handleAddTask }) => {
  const [taskContent, setTaskContent] = useState("");

  const SubmitHandler = (event) => {
    event.preventDefault();

    if (taskContent) {
      handleAddTask(taskContent);
      setTaskContent("");
    } else {
      alert("Invalid Input");
      return;
    }
  };
  return (
    <header className="w-full h-[200px] relative flex justify-center items-center px-4 bg-[#0D0D0D] text-white">
      <h1>ToDo App</h1>
      <form
        onSubmit={SubmitHandler}
        className="absolute w-[94%] sm:w-full max-w-[736px] h-[80px] -bottom-[40px] sm:h-[88px] sm:-bottom-[44px] flex py-4 gap-2"
      >
        <input
          type="text"
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
          placeholder="Add a new task"
          className="h-full flex-1 rounded-lg py-4 px-3 text-base border-[1px] border-[#0D0D0D] text-white bg-[#262626]"
        />
        <button
          type="submit"
          className="flex justify-center items-center gap-1 rounded-lg px-4 border-none bg-blue-500 hover:bg-blue-600"
        >
          <span>
            <p className="text-base font-semibold">Create</p>
          </span>
          <span className="translate-y-[1.5px] text-base">
            <i className="ri-add-circle-line"></i>
          </span>
        </button>
      </form>
    </header>
  );
};

export default Header;
