import { useContext } from "react";
import { CentralizedData } from "../Provider/Contect";

const EditModal = ({ tasks }) => {
  const {
    modal,
    setModal,
    taskIdToUpdate,
    taskContentToUpdate,
    setTaskContentToUpdate,
  } = useContext(CentralizedData);

  const SubmitHandler = (event) => {
    event.preventDefault();
    const index = tasks.findIndex((elem) => elem.id === taskIdToUpdate);
    const updatedTask = event.target.editedTask.value;

    if (updatedTask) {
      tasks[index].content = updatedTask;
      setModal(false);
    } else {
      alert("Cannnot leasve the task empty");
      setModal(false);
    }
  };

  return (
    <>
      {modal && (
        <div className="absolute z-10 w-full h-screen bg-white/30 backdrop-blur-sm">
          <div className="w-full h-full flex justify-center items-center">
            <form
              onSubmit={SubmitHandler}
              className="absolute w-[94%] sm:w-full max-w-[736px] h-[80px] flex flex-col py-4 gap-2"
            >
              <input
                type="text"
                name="editedTask"
                value={taskContentToUpdate}
                onChange={(e) => setTaskContentToUpdate(e.target.value)}
                placeholder="Update Task Here"
                className="h-full flex-1 rounded-lg py-4 px-3 text-base border-[1px] border-[#0D0D0D] text-white bg-[#262626]"
              />
              <div className="btns flex justify-end gap-4">
                <button
                  className="px-3 h-10 rounded-md bg-[#a1a1a1]"
                  onClick={() => setModal(false)}
                >
                  <p className="text-lg text-white">Cancel</p>
                </button>
                <button className="px-3 rounded-md bg-[#2f78ff]" type="submit">
                  <p className="text-lg text-white">Update</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
