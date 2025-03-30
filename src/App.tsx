import "./index.css";
import { Bus } from 'lucide-react';

import { StopName } from "./components/StopName";
import { Card } from "./components/Card";
import { DepartureBoard } from "./components/DepartureBoard";
import { LineNumber } from "./components/LineNumber";
import { SkyBox } from "./components/SkyBox";

export function App() {
  return (
    <SkyBox>
      <div className="flex flex-col gap-4 mt-5 mb-5">
        <Card>
          <div className="open-sans-600 text-slate-600 text-4xl border-b-4 pb-2 pt-2">
          Griffin
          </div>
          <div className="flex flex-col gap-1">
            <StopName name={"Dubois"} number={13331} request_stop={false}/>
            <div className="w-full flex flex-row flex-wrap gap-1">
              <LineNumber number={"5"} variant={"tram"}/>
              <LineNumber number={"11"} variant={"tram"}/>
            </div>
            <DepartureBoard>
              <table className="table-auto w-full">
                <tr>
                  <td>11</td>
                  <td>Dw. Niebuszewo</td>
                  <td>9 min</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Os. Zawadzkiego</td>
                  <td>18 min</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Dw. Niebuszewo</td>
                  <td>29 min</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Zaj. Pogodno</td>
                  <td>10:40</td>
                </tr>
              </table>
            </DepartureBoard>
          </div>
          <div className="flex flex-col gap-1">
          <StopName name={"Wyszyńskiego"} number={10918} request_stop={true}/>
          <div className="w-full flex flex-row flex-wrap gap-1">
            <LineNumber number={"2"} variant={"tram"}/>
            <LineNumber number={"6"} variant={"tram"}/>
            <LineNumber number={"12"} variant={"tramDiverted"}/>
            <LineNumber number={"75"} variant={"bus"}/>
            <LineNumber number={"806"} variant={"busDiverted"}/>
            <LineNumber number={"B"} variant={"expressBus"}/>
            <LineNumber number={"506"} variant={"night"}/>   
            <LineNumber number={"508"} variant={"night"}/>   
          </div>
          <DepartureBoard>
            <table className="table-auto w-full">
            <tr>
                <td>2</td>
                <td>Turkusowa</td>
                <td>teraz</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Gocław</td>
                <td>5 m</td>
              </tr>
              <tr>
                <td>806</td>
                <td>Os. Zawadzkiego</td>
                <td>12:25</td>
              </tr>
              <tr>
                <td>B </td>
                <td>Os. Dąbie</td>
                <td>15 m</td>
              </tr>
              <tr>
                <td>75 </td>
                <td>Pl. Rodła</td>
                <td>12:36</td>
              </tr>
            </table>
          </DepartureBoard>
          </div>
          <button className="open-sans-600 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded w-full shadow-lg">
            <div className="flex flex-row gap-2 justify-center">
              Edytuj przystanki
            </div>
          </button>
          <div className="open-sans-600 text-slate-600">
            Griffin wer. 4 „Śródmieście” by Moka 2025
          </div>
        </Card>
          
      </div>
      </SkyBox>
  );
}

export default App;
