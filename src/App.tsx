import "./index.css";
import { Bus, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useCookies } from 'react-cookie';

import { StopName } from "./components/StopName";
import { Card } from "./components/Card";
import { DepartureBoard } from "./components/DepartureBoard";
import { LineNumber } from "./components/LineNumber";
import { SkyBox } from "./components/SkyBox";
import { Button } from "./components/Button";
import { LineNumbers } from "./components/LineNumbers";
import { Stop } from "./components/Stop";

export function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [settingsIsOpen,setSettingsIsOpen] = useState(false);
  const [stopList,setStopList] = useState((function(){
    if(Array.isArray(cookies.stopList)){return cookies.stopList;}else{return [];}
  })());
  const [stopNumberChosenForAdding,setStopNumberChosenForAdding] = useState();
  const [stopDisplayList,setStopDisplayList] = useState();
  
  //if(cookies.stopList != undefined){setStopList(cookies.stopList);}

  function addStop(){
    if( stopNumberChosenForAdding != undefined){
      let list = new Array();
      //alert(stopList);

      if (stopList != undefined && Array.isArray(stopList)){
        list = stopList;
      }
      
      list.push(Number(stopNumberChosenForAdding));
      //alert(list);

      setStopList(list);
      setCookie("stopList",stopList)
      setSettingsIsOpen(false);
      //alert(stopList);

    }
  }
  function removeStop(){
    if( stopNumberChosenForAdding != undefined){
      let list = new Array();
      //alert(stopList);

      if (stopList != undefined && Array.isArray(stopList)){
        list = stopList;
      }
      //if(list.includes(stopNumberChosenForAdding)){
        var listNoRemovedStop = list.splice(list.indexOf(stopNumberChosenForAdding), 1) 
      //}
      //alert(list.includes(stopNumberChosenForAdding));
      //alert(list.indexOf(stopNumberChosenForAdding));

      setStopList(listNoRemovedStop);
      //alert(listNoRemovedStop);
      setCookie("stopList",stopList)
      setSettingsIsOpen(false);
      //alert(stopList);

    }
  }
  function displayStops(){
    var displayStops = [];
    try{
      stopList.forEach((item)=>{
        displayStops.push(<Stop number={item}/>);
      });
    }catch{

    }
    
    setStopDisplayList(displayStops);
  }
  useEffect(() => {
          const interval = setInterval(() => {
              displayStops(); 
        }, 1000);
      }, [])
  return (
    <SkyBox>
      <Modal
          isOpen={settingsIsOpen}
          contentLabel={"Edytuj przystanki"}
          className="open-sans-600 border-2 text-slate-500 border-neutral-50/50 flex flex-col gap-2 backdrop-blur-sm w-sm bg-neutral-200/60 p-4 shadow-xl rounded-xs m-auto">
        <div className="w-full flex flex-col">
            <button onClick={()=>setSettingsIsOpen(!settingsIsOpen)} className="open-sans-600 bg-linear-to-b from-red-500 to-red-600 hover:bg-linear-to-b hover:from-red-600 hover:to-red-700 hover:text-neutral-200 text-neutral-200 font-bold  rounded-sm  shadow-md border-1 border-red-900 size-9 justify-center items-center  place-self-end">
              <div className="flex flex-row gap-2 justify-center">
                <X />
              </div>
            </button>
            
            <div className="mb-4 flex-col flex gap-2">
              <div>
                <label className="block font-bold mb-2" for="stopNumber">
                  Dodaj przystanek
                </label>
                <input className="border rounded w-full py-2 px-3  leading-tight focus:outline-none shadow-outline shadow-md bg-neutral-100" id="stopNumber" type="text" value={stopNumberChosenForAdding} onChange={(e) => setStopNumberChosenForAdding(e.target.value)}>
                </input>
              </div>
              <Button onClick={addStop}>Dodaj przystanek</Button>
              <Button onClick={removeStop}>Usuń przystanek</Button>
            </div>
        </div>
      </Modal>
      <div className="flex flex-col gap-4 mt-5 mb-5">
        <Card>
          <div className="flex flex-row gap-16">
            <div className="open-sans-600 text-slate-600 text-4xl  pb-2 pt-2">
            Griffin
            </div>
            <div className="open-sans-600 text-slate-600 text-xl  pb-2 pt-2 place-self-end">
              4.2 "Stare miasto"
            </div>
          </div>

          {stopDisplayList}
          
          <Button onClick={()=>setSettingsIsOpen(!settingsIsOpen)}>Ustawienia</Button>
          <div className="open-sans-600 text-slate-600">
            made in Szczecin with love by Moka 2025
          </div>
        </Card>
      </div>
      
      </SkyBox>
  );
}

export default App;
