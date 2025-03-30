export function SkyBox({children}){
    // rano: to-blue-200 via-blue-300 from-amber-200
    //południe: to-blue-400 from-blue-100
    //popołudnie: to-[#706680] via-orange-400 from-orange-800
    //noc: from-blue-950 to-slate-950

    function styleSkybox(){
        const hour = (new Date()).getHours();
        
        console.log("Godzina: "+ hour);
        
        if(hour > 20 || hour < 4){
            //noc
            return "bg-linear-to-t from-blue-950 to-slate-950 w-full h-full flex flex-row min-h-screen justify-center items-center";
        }else if(hour >= 4 && hour <= 9){
            //rano
            return "bg-linear-to-t to-blue-200 via-blue-300 from-amber-200 w-full h-full flex flex-row min-h-screen justify-center items-center";
        }else if(hour > 9 && hour < 17){
            //południe
            return "bg-linear-to-t to-blue-400 from-blue-100 w-full h-full flex flex-row min-h-screen justify-center items-center";
        }else if(hour >= 17 && hour <= 20){
            //popołudnie
            return "bg-linear-to-t to-[#706680] via-orange-400 from-orange-800 w-full h-full flex flex-row min-h-screen justify-center items-center";

        }
    }
    const style = styleSkybox();
    return(
        <div className={style}>
            {children}
        </div>
    )
}