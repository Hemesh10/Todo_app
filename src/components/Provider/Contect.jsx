import { createContext, useState } from "react";

export const CentralizedData = createContext(null);

const DataStorage = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [taskIdToUpdate, setTaskIdToUpdate] = useState(null);
  const [taskContentToUpdate, setTaskContentToUpdate] = useState("");

  return (
    <CentralizedData.Provider
      value={{
        tasks,
        setTasks,
        modal,
        setModal,
        taskIdToUpdate,
        setTaskIdToUpdate,
        taskContentToUpdate,
        setTaskContentToUpdate,
      }}
    >
      {children}
    </CentralizedData.Provider>
  );
};

export default DataStorage;
