//import "./index.css";

export function DepartureBoard({children}){
    return <div className="departuresList text-4xl handjet-body bg-radial from-stone-700 to-stone-950 text-yellow-500 w-full p-4 rounded-lg shadow-2xl inset-shadow-2xl inset-shadow-stone-950">
        {children}
    </div>
}