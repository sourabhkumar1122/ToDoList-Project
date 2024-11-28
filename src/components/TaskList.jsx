import React, { useContext } from "react";
import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {  useTodocontest } from "./ToDoContexApi/ToDoContex";

const TaskList = () => {

 const {task,handleremove,handleEdit,handleremoveall,handlecomplete} = useTodocontest()


 

  return (
    <div className=" sm:bg-black">
      <ul>
        {task.map((tasklist) => (
          <li
            className={` flex justify-between border-b-2 px-2 py-1 items-center sm:cober ${tasklist.complete? " line-through":""}`}
            key={tasklist.id}
          >
            <div className=" flex gap-3">
              <span className=" cursor-pointer">
                <CiSquareCheck size={25} onClick={()=>handlecomplete(tasklist.id)}/>
              </span>
              <span>{tasklist.title}</span>
            </div>

            <div className=" flex gap-3">
              <span
                className=" cursor-pointer"
                onClick={() => handleEdit(tasklist.id)}
              >
                <FaEdit size={25} />
              </span>
              <span
                className=" cursor-pointer"
                onClick={() => handleremove(tasklist.id)}
              >
                <MdDelete size={25} />
              </span>
            </div>
          </li>
        ))}
      </ul>

      {
      task.length >= 1 ? 
        <button
          className=" bg-[red] text-white px-2 py-2 rounded-md my-5 hover:bg-red-400"
          onClick={handleremoveall}
        >
          Remove All
        </button>:""
      
      }
    </div>
  );
};

export default TaskList;
