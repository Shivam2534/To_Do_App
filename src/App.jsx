import { useEffect, useState } from "react";
import { Todoprovider } from "./contexts/index.js";
import "./App.css";
import { TodoForm } from "./Components/TodoForm.jsx";
import { TodoItem } from "./Components/TodoItem.jsx";
import Mode_Switcher from "./Components/Mode_Switcher.jsx";

function App() {
  const [todos, settodos] = useState([]);
  const [Theme, setTheme] = useState("light");

  const Addtask = (todo) => {
    settodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updatetask = (id, todo) => {
    //  settodos( todos.map((task) => task.id === id ? todo : task));
    settodos((prev) =>
      prev.map((prevtask) => (prevtask.id === id ? todo : prevtask))
    );
  };

  const deletetask = (id) => {
    settodos((prev) =>
      prev.filter((prevtask) => (prevtask.id === id ? false : true))
    );
  };

  const togglecomplete = (id) => {
    settodos((prev) =>
      prev.map((prevtask) =>
        prevtask.id === id
          ? { ...prevtask, completed: !prevtask.completed }
          : prevtask
      )
    );
  };

  const darkmode = () => {
    setTheme("dark");
  };

  const lightmode = () => {
    setTheme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(Theme);
  }, [Theme]);
  // now, in this way we can set(storing data to local storage) and get(getting data from local storage when we enter into application)
  // set("key","value") we need to provide both
  // get("key") but in case of get we just need to pass the key
  // we can use multiple useeffect also in a single app

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || null);
    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Todoprovider
      value={{
        todos,
        Addtask,
        deletetask,
        updatetask,
        togglecomplete,
        Theme,
        darkmode,
        lightmode,
      }}
    >
      <div className="bg-[#202124] dark:bg-[#FFFFFF] min-h-screen py-4">
        <div className="flex justify-end mx-6 ">
        <div>
          <Mode_Switcher />
        </div>
        </div>

        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-2 py-2 text-white dark:text-black">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
