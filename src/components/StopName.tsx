//import "../ind";

export function StopName({number,name,request_stop}){
    //jeśli to przystanek na rządanie to zwraca tablicę z "nż" ianczej zwraca ją bez
    if (request_stop == true){
        return (
            <div>
              {/*Tablica przystankowa*/}
              <div className="open-sans-600 w-full text-3xl bg-radial from-neutral-50 to-neutral-200 text-blue-900 p-3 text-center shadow-xl flex felx-row gap-3 justify-center items-center">
                <div className="">{name}</div> 
                <div className="flex flex-col gap-1">
                  <div className="rounded-full size-8 bg-neutral-800 text-neutral-200 p-0.5 text-xl font-extrabold justify-center items-center">
                    <p>nż</p>
                  </div>
                  <div className="text-sm font-bold gap-0 text-neutral-900">
                    {number}
                  </div>
                </div>  
              </div>
              <div className="h-1 w-full bg-blue-900"></div>
              <div className="h-1 w-53 bg-cyan-600 -translate-y-1"></div>
              <div className="h-1 w-18 bg-lime-600 -translate-y-2"></div>
            </div>
        );
    }else{
        return (
            <div>
              {/*Tablica przystankowa*/}
              <div className="open-sans-600 w-full text-3xl bg-radial from-neutral-50 to-neutral-200 text-blue-900 p-3 text-center shadow-xl flex felx-row gap-3 justify-center items-center">
                <div className="">{name}</div> 
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold gap-0 text-neutral-900">
                    {number}
                  </div>
                </div>  
              </div>
              <div className="h-1 w-full bg-blue-900"></div>
              <div className="h-1 w-53 bg-cyan-600 -translate-y-1"></div>
              <div className="h-1 w-18 bg-lime-600 -translate-y-2"></div>
            </div> 
        );
    }
    
}