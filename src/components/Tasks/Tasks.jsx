import { Box, ScrollArea } from "@radix-ui/themes";
import Task from "../Task/Task";

const Tasks = ({ tasks, deleteHandler, updateTaskById, onComplete }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <section className="w-[94%] sm:w-full max-w-[736px] py-4 mt-[100px] sm:mt-[74px] mx-auto">
      <header className="flex justify-between mb-[24px]">
        <div className="flex items-center gap-2">
          <p className="text-blue-400 text-sm font-semibold">Tasks Created</p>
          <span className="text-xs font-bold px-[10px] py-[3px] rounded-full text-[#d9d9d9] bg-[#333333]">
            {tasksQuantity}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-blue-400 text-sm font-semibold">Completed Tasks</p>
          <span className="text-xs font-bold px-[10px] py-[3px] rounded-full text-[#d9d9d9] bg-[#333333]">
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>
      {tasks.length > 0 ? (
        <div className="list">
          <ScrollArea
            type="always"
            scrollbars="vertical"
            style={{ height: 350 }}
          >
            <Box
              p="2"
              pr="4"
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    tasks={tasks}
                    task={task}
                    deleteHandler={deleteHandler}
                    updateHandler={updateTaskById}
                    onComplete={onComplete}
                  />
                );
              })}
            </Box>
          </ScrollArea>
        </div>
      ) : (
        <p className="text-lg text-white text-center w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Nothing to show here 💩
        </p>
      )}
    </section>
  );
};

export default Tasks;
