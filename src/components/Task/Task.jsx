/* eslint-disable no-unused-vars */
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

const Task = ({ task, deleteHandler, updateHandler, onComplete }) => {
  // const editHandler = () => {
  //   console.log("Hey");
  //   // console.log(taskContent);
  //   // setModal((prev) => !prev);
  // };

  return (
    <div className="w-full flex justify-between items-center pt-4 px-4 pb-3 rounded-lg border-[1px] border-[#333333] bg-[#262626]">
      <div className="flex items-center">
        <button onClick={() => onComplete(task.id)} className="w-5 h-5 bg-none">
          {task.isCompleted ? (
            <div className="w-full h-full -translate-y-1">
              <i className="ri-check-line text-lg rounded-full bg-indigo-600 p-[1px] text-white"></i>
            </div>
          ) : (
            <div className="w-full h-full rounded-full border-[1px] border-blue-500" />
          )}
        </button>
        <p
          className={
            task.isCompleted
              ? "text-slate-200 line-through opacity-75 ml-2 sm:ml-4"
              : "text-slate-200 max-w-[12rem] sm:max-w-sm md:max-w-lg ml-2 sm:ml-4 break-words"
          }
        >
          {task.content}
        </p>
      </div>
      <div className="space-x-6 sm:space-x-9">
        {!task.isCompleted ? (
          <button
            onClick={() => updateHandler(task.id, task.content)}
            className="bg-none border-none text-slate-200"
          >
            <i className="ri-edit-line text-lg"></i>
          </button>
        ) : (
          <button className="bg-none border-none text-slate-200 pointer-events-none opacity-50">
            <i className="ri-edit-line text-lg"></i>
          </button>
        )}
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <button
              onClick={() => deleteHandler(task.id, task.isCompleted)}
              className="bg-none border-none text-slate-200"
            >
              <i className="ri-delete-bin-line text-lg"></i>
            </button>
          </AlertDialog.Trigger>
          {!task.isCompleted && (
            <AlertDialog.Content style={{ maxWidth: 450 }}>
              <AlertDialog.Title>Are you sure?</AlertDialog.Title>
              <AlertDialog.Description size="2">
                This task isn&rsquo;t completed yet. Do you really want to
                delete it anyway?
              </AlertDialog.Description>
              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="blue">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button
                    onClick={() => deleteHandler(task.id, true)}
                    variant="solid"
                    color="red"
                  >
                    Delete
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          )}
        </AlertDialog.Root>
      </div>
    </div>
  );
};

export default Task;
