import "./index.css";
import { Bus, X, ExternalLink, Trash, ArrowUp, ArrowDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useCookies } from 'react-cookie';
import { add } from "date-fns";

import { StopName } from "./components/StopName";
import { Card } from "./components/Card";
import { DepartureBoard } from "./components/DepartureBoard";
import { LineNumber } from "./components/LineNumber";
import { SkyBox } from "./components/SkyBox";
import { Button } from "./components/Button";
import { LineNumbers } from "./components/LineNumbers";
import { Stop } from "./components/Stop";
import DraggableList from "react-draggable-list";
import { DraggableStopName } from "./components/DraggableStop";
//import { PoznanStopName } from "./components/PoznanStopName";
//import { PoznanLineNumber } from "./components/PoznanLineNumber";

export function App() {
  const [cookies, setCookie, removeCookie] = useCookies(); //ciasteczka
  const [settingsIsOpen,setSettingsIsOpen] = useState(false);
  const [stopList,setStopList] = useState((function(){
    if(Array.isArray(cookies.stopList)){return cookies.stopList;}else{return [];}
  })()); //glowna lista przyztankow 
  const [stopNumberChosenForAdding,setStopNumberChosenForAdding] = useState(); //numer dodawanego (usuwanego) przystanku
  const [stopDisplayList,setStopDisplayList] = useState(); //lista gotowych do wyseitlenia elementow przystankowych
  
  const [stopDraggableDisplayList,setStopDraggableDisplayList] = useState();
  async function checkIfStopExists(number) {
    //bierze departures z API
    var stop = null;
    const request = new Request("https://www.zditm.szczecin.pl/api/v1/stops", {
        method: "GET",
    });

    const response = await fetch(request).then((response) => response.text())
        .then((data) => {
            //console.log(data);
            JSON.parse(data).data.forEach((element)=>{
              if (element.number == number) {
                stop = element;
              } 
            });
        });
    if(stop != null){
      return true;
    }else{
      return false;
    }

  }
  async function addStop(){
    if( stopNumberChosenForAdding != undefined && await checkIfStopExists(stopNumberChosenForAdding)){
      let list = new Array();
      //alert(stopList);

      if (stopList != undefined && Array.isArray(stopList)){
        list = stopList;
      }
      
      list.push(Number(stopNumberChosenForAdding));
      //alert(list);

      setStopList(list);
      setCookie("stopList",stopList,{
        path: "/",
        expires: add(new Date(Date.now()),{years: 1}) //caisteczko wygasa po roku od stwrozenia
      })
      setSettingsIsOpen(false);
      //alert(stopList);

    }else if(stopNumberChosenForAdding != undefined){
      alert("Taki przystanek nie istnieje. Numer przystanku znajdziesz na stronie ZDiTM");
    }
  }
  function removeStop(){
    if( stopNumberChosenForAdding != undefined){
      let list = new Array();
    //alert("do usuneicie");
      

      if (stopList != undefined && Array.isArray(stopList)){
        list = stopList;
      }
      
      var listNoRemovedStop =  list.filter(function (element) {
          return element != stopNumberChosenForAdding;
      });

      setStopList(listNoRemovedStop);
      setSettingsIsOpen(false);
      //alert(stopList);
      //displayStops(); 
      setCookie("stopList",listNoRemovedStop);
      location.reload()
    }
  }
  function displayStops(){
    var displayStops = [];
    try{
      stopList.forEach((item)=>{
        displayStops.push(<Stop number={item}/>);
      });
    }catch{
      //puste
    }
    setStopDisplayList(displayStops);
  }
  function removeStopDraggable(number){
    //removeStop();
    let list = new Array();
    //alert("do usuneicie");
      

      if (stopList != undefined && Array.isArray(stopList)){
        list = stopList;
      }
      
      var listNoRemovedStop =  list.filter(function (element) {
          return element != number;
      });

      setStopList(listNoRemovedStop);
      //setSettingsIsOpen(false);
      //alert(stopList);
      //displayStops(); 
      setCookie("stopList",listNoRemovedStop);
      location.reload()
  }

  
  function displayDraggableStops(){
    var displayStops = [];
    try{
      stopList.forEach((item)=>{
        displayStops.push(
          <div className="flex flex-row gap-1">
            
            <button onClick={()=>removeStopDraggable(item)} className="open-sans-600 bg-linear-to-t from-slate-400 to-slate-300 hover:bg-linear-to-t hover:from-slate-500 hover:to-slate-400 hover:text-slate-800 text-zinc-700 font-bold  rounded-sm shadow-md border-1 border-slate-950 size-9 justify-center items-center">
              <div className="flex flex-row gap-2 justify-center">
                <Trash />
              </div>
            </button>
            <DraggableStopName number={item}/>
          </div>
        );
      });
    }catch{
      //puste
    }
    setStopDraggableDisplayList(displayStops);
  }
  useEffect(() => {
        const interval = setInterval(() => {
        displayStops();
        displayDraggableStops(); 
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
            <div className="flex flex-col gap-1">
            <label className="block font-bold mb-2" >
              Twoje przystanki
            </label>
            {stopDraggableDisplayList}
            </div>
            <div className="mb-4 flex-col flex gap-2">
              <div>
                <label className="block font-bold mb-2" for="stopNumber">
                  Dodaj przystanek
                </label>
                <input className="border rounded w-full py-2 px-3  leading-tight focus:outline-none shadow-outline shadow-md bg-neutral-100" id="stopNumber" type="text" value={stopNumberChosenForAdding} placeholder="Numer przystanku" onChange={(e) => setStopNumberChosenForAdding(e.target.value)}>
                </input>
                <p>Numer przystanku znajdziesz na 
                  <a className="hover:underline" href="https://www.zditm.szczecin.pl/pl/pasazer/rozklady-jazdy/mapa-przystankow-i-pojazdow">
                    <div className="flex flex-row">
                    <p>stronie ZDiTM</p><ExternalLink size={18}/>
                    </div>
                  </a>
                </p>
              </div>
              <Button onClick={addStop}>Dodaj przystanek</Button>
              {/*<Button onClick={removeStop}>Usuń przystanek</Button>*/}
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
              4.4 "Stare miasto"
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
