import React from "react";
import { useTodo } from "../contexts";
export default function Mode_Switcher() {
    const {Theme,darkmode,lightmode} = useTodo()

    const change_theme_mode = (e) =>{
       const mode = e.currentTarget.checked

       if(mode)
       {
         darkmode();
       }
       else {
        lightmode();
       }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                onChange={change_theme_mode}
                checked = {Theme === "dark"}
                className="sr-only peer"
            />
            <span className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 dark:bg-black hover:bg-gray-100 shrink-0 disabled:opacity-50" >🌙</span>
        </label>
    );
}

