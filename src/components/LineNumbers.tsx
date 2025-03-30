import { useEffect, useState } from "react";
import { LineNumber } from "./LineNumber";

export function LineNumbers({number}){
    const [lines,setLines] = useState();
    const [linesListDisplay, setLinesListDisplay] = useState();
    async function fetchLines() {
        //bierze departures z API
        const requestDepartures = new Request("https://www.zditm.szczecin.pl/api/v1/displays/" + String(number), {
            method: "GET",
        });

        const response = await fetch(requestDepartures).then((response) => response.text())
            .then((data) => {
                //console.log(data);
                var responseLines = []; //najpierw zbeira linie z tablicy odjzadow 
                
                for(let i = 0;i < JSON.parse(data).departures.length;i++){
                    responseLines.push(JSON.parse(data).departures[i].line_number);
                }
                var uniqueResponseLines = responseLines.filter((element,index)=>{
                    return responseLines.indexOf(element) === index;
                }); //usuwa dupliakty
                //console.log(responseLines);
                setLines(uniqueResponseLines);
                parseLines(uniqueResponseLines);
            });

    }
    function parseLines(data){
        var displayLines = [];
        data.forEach((item)=>{
            displayLines.push(<LineNumber number={item}/>);
        });
        setLinesListDisplay(displayLines);
    }
    useEffect(() => {
            
        fetchLines(); 
          
    }, [])
    return(
        <div className="w-full flex flex-row flex-wrap gap-1">
            {linesListDisplay}
        </div>
    )
}