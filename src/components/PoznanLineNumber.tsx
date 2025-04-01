//import "./../index.css";
import { useEffect, useState } from 'react';

export function PoznanLineNumber({number, backgroundColor, textColor}){
    const [variant,setVariant] = useState();
    async function fetchVariant() {
        //bierze departures z API

    }
    
    const style = "inter-800 tracking-tighter size-8 text-xl flex rounded-full items-center justify-center" +" "+ backgroundColor +" "+ textColor;
    return(
        
         <div className='bg-radial shadow-md from-neutral-700 to-neutral-800 w-13 h-10 flex items-center justify-center'>
            <div className={style}>
                {number}
            </div> 
        </div>
    );
}