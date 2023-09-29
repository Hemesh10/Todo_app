import { Box, ScrollArea } from "@radix-ui/themes";
import Task from "../Task/Task";

const Tasks = ({ tasks, deleteHandler, updateTaskById, onComplete }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <section className="w-[94%] sm:w-full max-w-[736px] py-4 mt-[74px] mx-auto">
      <header className="flex justify-between items-center mb-[24px]">
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
      <div className="list flex flex-col gap-[2vmin]">
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 350 }}>
          <Box
            p="2"
            pr="5"
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
    </section>
  );
};

export default Tasks;
