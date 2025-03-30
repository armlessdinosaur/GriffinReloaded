import "./index.css";
import { Bus } from 'lucide-react';

import { StopName } from "./components/StopName.tsx";
import { Card } from "./components/Card";
import { DepartureBoard } from "./components/DepartureBoard";
import { LineNumber } from "./components/LineNumber";

export function App() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
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
          <ul className="">
            <li> 6 » Gocław 5min</li>
            <li> 6 » Gocław 20min</li>
            <li> 6 » Gocław 35min</li>
            <li> 6 » Gocław 50min</li>
          </ul>
        </DepartureBoard>
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
      </Card>
      <Card>
        <button className="open-sans-600 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded w-full shadow-lg">
          <div className="flex flex-row gap-2 justify-center">
            Edytuj przystanki
          </div>
        </button>
      </Card>
    </div>
  );
}

export default App;
