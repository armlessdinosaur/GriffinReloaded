export function Button({onClick, children}){
    return(
        <button onClick={onClick} className="open-sans-600 bg-linear-to-t from-slate-400 to-slate-300 hover:bg-linear-to-t hover:from-slate-500 hover:to-slate-400 hover:text-slate-800 text-zinc-700 font-bold  rounded-sm w-full shadow-md border-1 border-slate-950">
            <div className="flex flex-row gap-2 justify-center py-2 px-4 z-1">
              {children}
            </div>
        </button>
    )
}