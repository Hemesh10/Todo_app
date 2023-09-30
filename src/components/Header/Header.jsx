import { useState } from "react";
import check_icon from "../../assets/images/check_icon.png";
import toast from "react-hot-toast";

const Header = ({ handleAddTask }) => {
  const [taskContent, setTaskContent] = useState("");

  const SubmitHandler = (event) => {
    event.preventDefault();

    if (taskContent) {
      handleAddTask(taskContent);
      setTaskContent("");
    } else {
      toast.error("Invalid Input");
      return;
    }
  };
  return (
    <header className="w-full h-[125px] sm:h-[200px] relative flex justify-center items-center px-4 bg-[#0D0D0D] text-white">
      <div className="flex items-center gap-4 -translate-y-2 sm:translate-y-0">
        <img src={check_icon} alt="icon" className="w-8 sm:w-10" />
        <h1 className="text-lg tracking-wide">ToDo App</h1>
      </div>
      <form
        onSubmit={SubmitHandler}
        className="absolute w-[94%] sm:w-full max-w-[736px] h-[80px] -bottom-[40px] sm:h-[88px] sm:-bottom-[44px] sm:flex text-center py-4 gap-2 space-y-4 sm:space-y-0"
      >
        <input
          type="text"
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
          placeholder="Add a new task"
          className="h-full w-full flex-1 rounded-lg py-4 px-3 text-base border-[1px] border-[#0D0D0D] text-white bg-[#262626]"
        />
        <button
          type="submit"
          className="h-11 sm:h-auto flex justify-center items-center gap-2 rounded-lg px-4 translate-x-28 sm:translate-x-0 border-none bg-blue-500 hover:bg-blue-600"
        >
          <span>
            <p className="text-base font-semibold">Create</p>
          </span>
          <span className="translate-y-[1px] text-base">
            <i className="ri-add-circle-line"></i>
          </span>
        </button>
      </form>
    </header>
  );
};

export default Header;
