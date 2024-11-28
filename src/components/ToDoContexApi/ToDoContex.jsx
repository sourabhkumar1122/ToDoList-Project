import { createContext, useContext, useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const ToDoContex = createContext();

const useTodocontest =()=>useContext(ToDoContex)




const getlocalitem =()=>{
  const storeitem =localStorage.getItem("list");
  return storeitem?JSON.parse(localStorage.getItem("list")):[];
};




const ToDoProvider = ({ children }) => {


    



  const [act, setact] = useState("");
  const [task, settask] = useState(getlocalitem);
  const [update, setupdate] = useState(true);
  const [Edit, setEdit] = useState(null);

  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(task));
  },[task])

  const handleupdate = () => {
    if (act === "") {
      alert("please fill the input box");
    } else if (!update) {
      settask(
        task.map((newElem) => {
          if (newElem.id === Edit) {
            return { ...newElem, title: act };
          }
          return newElem;
        })
      );
      setupdate(true);
      setact("");
      setEdit(null);
    } else {
      const allact = { id: uuidv4(), title: act, complete: false };
      console.log(allact);
      settask([...task, allact]);
      setact("");
    }
  };

  const handleremove = (i) => {
    const isconform = window.confirm("are you sure you want to remove it")
    if(isconform){
      const filteritem = task.filter((item) => i != item.id);

      settask(filteritem);
    }
   
  };

  const handleEdit = (id) => {
    const finditem = task.find((ele) => {
      return id === ele.id;
    });
    setact(finditem.title);
    setupdate(false);
    setEdit(id);
  };

  const handleremoveall = () => {
    settask([]);
  };

  const handlecomplete =(id)=>{
    settask(task.map((comitem)=>{
      if(comitem.id===id){
        return {...comitem, complete: !comitem.complete}
      }
      return comitem;
    }))
  }

  const allvalue = {
    act,
    setact,
    task,
    settask,
    update,
    setupdate,
    Edit,
    setEdit,
    handleupdate,handleremove,handleEdit,handleremoveall,handlecomplete
  };
  return <ToDoContex.Provider value={allvalue}>{children}</ToDoContex.Provider>;
};

export { ToDoContex, ToDoProvider,useTodocontest };
