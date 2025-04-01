//import "../ind";

import { useEffect, useState } from "react";

export function PoznanStopName({number}){
    //jeśli to przystanek na rządanie to zwraca tablicę z "nż" ianczej zwraca ją bez
    const [stopName,setStopName] = useState("");
    const [requestStop,setRequestStop] = useState(false);

    async function fetchStopInfo() {
      //bierze departures z API
      const request = new Request("https://www.zditm.szczecin.pl/api/v1/stops", {
          method: "GET",
      });

      const response = await fetch(request).then((response) => response.text())
          .then((data) => {
              //console.log(data);
              JSON.parse(data).data.forEach((element)=>{
                if (element.number == number) {
                  setStopName(element.name);
                  setRequestStop(element.request_stop);
                } 
              });
          });

    }
    useEffect(() => {
      fetchStopInfo();    
    }, [])
      
    if (requestStop == true){
        return (
            <div>
              {/*Tablica przystankowa*/}
              <div className="inter-700 w-full text-3xl bg-radial from-neutral-700 to-neutral-800 text-neutral-200 p-3 text-center shadow-xl flex felx-row gap-3 justify-center items-center">
                <div className="">{stopName}</div> 
                <div className="flex flex-col gap-1">
                  <div className="rounded-full size-8 bg-neutral-800 text-neutral-200 p-0.5 text-xl font-extrabold justify-center items-center">
                    <p>nż</p>
                  </div>
                  <div className="text-sm font-bold gap-0 text-neutral-200">
                    {number}
                  </div>
                </div>  
              </div>
              
            </div>
        );
    }else{
        return (
            <div>
              {/*Tablica przystankowa*/}
              <div className="inter-700 w-full text-3xl bg-radial from-neutral-800 to-neutral-900 text-neutral-200 p-3 text-center shadow-xl flex felx-row gap-3 justify-center items-center">
                <div className="">{stopName}</div> 
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold gap-0 text-neutral-200">
                    {number}
                  </div>
                </div>  
              </div>
              
            </div> 
        );
    }
    
}