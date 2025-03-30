//import "./index.css";

import { useEffect, useState } from "react";

export function DepartureBoard({ number}) {
    const [departures, setDepartures] = useState([]);
    const [deaprturesListDisplay, setDeparturesListDisplay] = useState();
    async function fetchDepartures() {
        //bierze departures z API
        const request = new Request("https://www.zditm.szczecin.pl/api/v1/displays/" + String(number), {
            method: "GET",
        });

        const response = await fetch(request).then((response) => response.text())
            .then((data) => {
                //console.log(data);
                setDepartures(JSON.parse(data));
                //console.log(departures);
                setDeparturesListDisplay(parseDepartures(JSON.parse(data)));
            });

    }
    function parseDepartures(data){
        try{
            var departuresList = [];
            //console.log(data);
            if (Math.min(data.departures.length,5) < 1){return <p>Z tego przystanku obecnie nie są wykonywane żadne kursy.</p>} 
            for(let i=0;i < Math.min(data.departures.length,5);i++){
                switch(data.departures[i].time_real){
                    case null:
                        departuresList.push(
                            <tr>
                                <td>{String(data.departures[i].line_number)}</td>
                                <td>{String(data.departures[i].direction.replace("Osiedle","Os.").replace("Dworzec","Dw.").replace("Zajezdnia","Zaj.").replace("przez","p."))}</td>
                                <td>{String(data.departures[i].time_scheduled)}</td>
                            </tr>
                        );
                        break;
                    case 0:
                        departuresList.push(
                            <tr className="animate-pulse">
                                <td>{String(data.departures[i].line_number)}</td>
                                <td>{String(data.departures[i].direction.replace("Osiedle","Os.").replace("Dworzec","Dw.").replace("Zajezdnia","Zaj.").replace("przez","p."))}</td>
                                <td>{"teraz"}</td>
                            </tr>
                        );
                        break;
                    default:
                        departuresList.push(
                            <tr>
                                <td>{String(data.departures[i].line_number)}</td>
                                <td>{String(data.departures[i].direction.replace("Osiedle","Os.").replace("Dworzec","Dw.").replace("Zajezdnia","Zaj.").replace("przez","p."))}</td>
                                <td>{String(data.departures[i].time_real)+"min"}</td>
                            </tr>
                        );
                        break;
                }
            }
             
            return departuresList;
        }catch(error){
            return (String(error));
        }     
    }
    useEffect(() => {
        const interval = setInterval(() => {
            fetchDepartures(); 
      }, 1000);
    }, [])
    return <div className="departuresList text-4xl handjet-body bg-radial from-stone-700 to-stone-950 text-yellow-500 w-full p-4 rounded-lg shadow-2xl inset-shadow-2xl inset-shadow-stone-950">
        <table className="table-auto w-full">
            {deaprturesListDisplay}
        </table>
        
    </div>
}