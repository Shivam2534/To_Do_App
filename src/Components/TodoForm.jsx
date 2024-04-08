import { useState } from "react";
import { useTodo } from "../contexts";
export const TodoForm = () =>{
    const [todo,settodo] = useState("")
    const {Addtask} = useTodo();

    const add = (e) =>{
       e.preventDefault();

       if(!todo) return

       Addtask({todo:todo,completed:false})
       settodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                onChange={(e)=>settodo(e.target.value)}
                value={todo}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-white dark:text-black"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white dark:text-black shrink-0">
                Add
            </button>
        </form>
    );
}
