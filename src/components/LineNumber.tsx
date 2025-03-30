//import "./../index.css";
import { useEffect, useState } from 'react';

export function LineNumber({number}){
    const [variant,setVariant] = useState();
    async function fetchVariant() {
        //bierze departures z API
        const requestDepartures = new Request("https://www.zditm.szczecin.pl/api/v1/lines", {
            method: "GET",
        });

        const response = await fetch(requestDepartures).then((response) => response.text())
            .then((data) => {
                console.log(data);
                JSON.parse(data).data.forEach((element)=>{
                    if (element.number == number) {
                      if(element.type == "night"){
                            setVariant("night");
                      }else if(element.vehicle_type == "bus" && element.highlighted == true){
                        setVariant("busDiverted");
                      }else if(element.vehicle_type == "tram" && element.highlighted == true){
                        setVariant("tramDiverted");
                      }else if(element.subtype == "fast"){
                        setVariant("expressBus");
                      }else{
                        setVariant(element.vehicle_type);
                      }
                      console.log(element.vehicle_type);
                    } 
                  });
            });

    }
    useEffect(() => {
        fetchVariant();    
    }, [])
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