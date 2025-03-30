//import "./../index.css";
import { useState } from 'react';

export function LineNumber({variant,number}){
    function styleLineNumber(){
        switch(variant){
            case "tram":
                return "open-sans-700-condensed font-black text-4xl gap-1 tracking-tighter bg-radial from-neutral-50 to-neutral-200 text-neutral-900 w-13 p-0.1 justify-center border-4 border-cyan-600 shadow-md text-center";
            case "tramDiverted":
                return "open-sans-700-condensed font-black text-4xl gap-1 tracking-tighter bg-yellow-400 text-neutral-900 w-13 p-0.1 justify-center border-4 border-cyan-600 shadow-md text-center";
            case "bus":
                return "open-sans-700-condensed font-black text-4xl gap-1 tracking-tighter bg-radial from-neutral-50 to-neutral-200 text-neutral-900 w-13 p-0.1 justify-center border-4 border-lime-600 shadow-md text-center";
            case "busDiverted":
                return "open-sans-700-condensed font-black text-4xl gap-1 tracking-tighter bg-yellow-400 text-neutral-900 w-13 p-0.1 justify-center border-4 border-lime-600 shadow-md text-center";
            case "expressBus":
                return "open-sans-700-condensed font-black text-4xl gap-1 tracking-tighter bg-radial from-neutral-50 to-neutral-200 text-red-700 w-13 p-0.1 justify-center border-4 border-red-700 shadow-md text-center";
            case "night":
                return "open-sans-700-condensed font-black text-4xl gap-1 tracking-tighter bg-radial from-neutral-800 to-neutral-900 text-neutral-200 w-13 p-0.1 justify-center border-4 border-neutral-200 shadow-md text-center";
        }
    }
    const style = styleLineNumber();
    return(
         <div className={style}>{number}</div>
    );
}