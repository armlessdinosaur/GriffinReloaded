import outOfOrderImage from "./../assets/outOfOrder.png";

export function OutOfOrder({header,description}){
    return(
        <div className="flex flex-row w-full gap-1">
            <div>
                <img src={outOfOrderImage} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="open-sans-600 text-slate-600 text-4xl">{header}</div>
                <div className="open-sans-600 text-slate-600 text-xl">{description}</div>
            </div>
        </div>
    )
}