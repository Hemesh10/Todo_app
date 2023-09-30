import { useContext } from "react";
import { CentralizedData } from "../Provider/Contect";
import toast from "react-hot-toast";

const EditModal = ({ tasks }) => {
  const {
    modal,
    setModal,
    taskIdToUpdate,
    taskContentToUpdate,
    setTaskContentToUpdate,
  } = useContext(CentralizedData);

  const wait = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const index = tasks.findIndex((elem) => elem.id === taskIdToUpdate);
    const updatedTask = event.target.editedTask.value;

    if (updatedTask) {
      console.log(taskContentToUpdate);
      tasks[index].content = updatedTask;
      setModal(false);
      await wait(250);
      toast.success("Task Edited");
    } else {
      toast.error("Cannot leave the tast empty");
    }
  };

  return (
    <>
      {modal && (
        <div
          className={`absolute z-10 w-full h-screen bg-blue-950/30 backdrop-blur-[2px] transition-all`}
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="box w-full sm:w-[450px] flex flex-col gap-4 border-[1px] rounded-md px-2 py-4 bg-white">
              <div className="header">
                <h1 className="text-lg font-medium">Edit task</h1>
              </div>
              <form onSubmit={SubmitHandler} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="editedTask"
                  value={taskContentToUpdate}
                  onChange={(e) => setTaskContentToUpdate(e.target.value)}
                  placeholder="Update Task Here"
                  className="flex-1 rounded-lg p-2 text-sm text-black outline-none border-2 bg-slate-100 placeholder:text-black/75"
                />
                <div className="btns flex justify-end gap-4">
                  <button
                    className="px-3 h-9 rounded-md bg-red-500 bg-opacity-95 hover:bg-opacity-100"
                    onClick={() => setModal(false)}
                  >
                    <p className="text-base text-white">Cancel</p>
                  </button>
                  <button
                    className="px-3 rounded-md bg-blue-600 bg-opacity-95 hover:bg-opacity-100"
                    type="submit"
                  >
                    <p className="text-base text-white">Update</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;

// #E1FOFF

// #13141A
