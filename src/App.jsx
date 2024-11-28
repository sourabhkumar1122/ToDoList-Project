
import './App.css'
import { ToDoProvider } from './components/ToDoContexApi/ToDoContex'
import ToDoList from './components/ToDoList'

function App() {
 
    
  return (
   <>

   <div className=' bg-[black]'>
   <ToDoProvider>
   <ToDoList ></ToDoList>
   </ToDoProvider>
   </div>
   
   
   
   </>
  )
}

export default App
