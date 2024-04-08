import { useContext, createContext } from "react";

export const TodoContext = createContext({
   Todos: [
     {
        id:1,
        todo:"Do Homework",
        completed:false,
     }
   ],
   Addtask: (todo)=>{},
   deletetask: (id)=>{}, 
   updatetask: (id,todo)=>{},
   togglecomplete: (id)=>{},
   Theme:"light",
   darkmode: ()=>{},
   lightmode: ()=>{}
});



export const Todoprovider = TodoContext.Provider;

export const useTodo = () =>{
    return useContext(TodoContext);
}