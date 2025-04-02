//import "./index.css";

export function Card({children}){
    return (
        <div className="border-2 border-neutral-50/50 flex flex-col gap-2 backdrop-blur-xl w-sm  bg-neutral-200/60 p-4 shadow-xl rounded-xs open-sans-600 text-slate-600">
            {children}
        </div>
    );
}