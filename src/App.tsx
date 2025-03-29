import "./index.css";
import { Bus } from 'lucide-react';

export function App() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 backdrop-blur-sm w-sm bg-neutral-200/60 p-4 shadow-xl">
        <div>
          {/*Tablica przystankowa*/}
          <div className="open-sans-600 w-full text-3xl bg-radial from-neutral-50 to-neutral-200 text-blue-900 p-3 text-center shadow-xl flex felx-row gap-3 justify-center items-center">
            <div className="">Wyszyńskiego</div> 
            <div className="flex flex-col gap-1">
              <div className="rounded-full size-8 bg-neutral-800 text-neutral-200 p-0.5 text-xl font-extrabold justify-center items-center">
                <p>nż</p>
              </div>
              <div className="text-sm font-bold gap-0 text-neutral-900">
                10917
              </div>
            </div>  
          </div>
          <div className="h-1 w-full bg-blue-900"></div>
          <div className="h-1 w-53 bg-cyan-600 -translate-y-1"></div>
          <div className="h-1 w-18 bg-lime-600 -translate-y-2"></div>
        </div>
        <div className="w-full flex flex-row open-sans-700-condensed font-black text-4xl gap-1 tracking-tighter">
          <div className="bg-radial from-neutral-50 to-neutral-200 text-neutral-900 w-13 p-0.1 justify-center border-4 border-cyan-600 shadow-md text-center">
            6
          </div>
          <div className="bg-radial from-neutral-50 to-neutral-200 text-neutral-900 w-13 p-0.1 justify-center border-4 border-lime-600 shadow-md text-center">
            811
          </div>
          <div className="bg-yellow-400 text-neutral-900 w-13 p-0.1 justify-center border-4 border-lime-600 shadow-md text-center">
            61
          </div>
          <div className="bg-radial from-neutral-50 to-neutral-200 text-red-700 w-13 p-0.1 justify-center border-4 border-red-700 shadow-md text-center">
            B
          </div>
          <div className="bg-radial from-neutral-800 to-neutral-900 text-neutral-200 w-13 p-0.1 justify-center border-3 border-neutral-200 shadow-md text-center">
            506
          </div>
        </div>
        <div className="text-4xl handjet-body bg-radial from-stone-700 to-stone-950 text-yellow-500 w-full p-4 rounded-lg shadow-2xl inset-shadow-2xl inset-shadow-stone-950">
          {/*Odjazdy*/}
          <ul className="departuresList">
            <li> 6 » Gocław 5min</li>
            <li> 6 » Gocław 20min</li>
            <li> 6 » Gocław 35min</li>
            <li> 6 » Gocław 50min</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 backdrop-blur-sm w-sm bg-neutral-200/60 p-4 shadow-xl">
      <button className="open-sans-600 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded w-full shadow-lg">
        <div className="flex flex-row gap-2 justify-center">
          Edytuj przystanki
        </div>
      </button>
      
      </div>
    </div>
  );
}

export default App;
