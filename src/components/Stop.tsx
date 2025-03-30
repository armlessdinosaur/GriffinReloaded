import { StopName } from "./StopName";
import { DepartureBoard } from "./DepartureBoard";
import { LineNumbers } from "./LineNumbers";

export function Stop({number}){
    return (<div className="flex flex-col gap-1">
                <StopName number={number}/>
                <LineNumbers number={number}/>
                <DepartureBoard number={number} />
              </div>)
}