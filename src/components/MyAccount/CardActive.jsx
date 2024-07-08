import {Ticket} from "../../assets/icons/index.js";

function CardActive({children}) {
    return (
        <div className="flex items-center flex-wrap gap-3 justify-between w-full max-w-[340px]">
            <div className="flex gap-3 items-center">
                <span>
                    <Ticket className="size-[30px] fill-white"/>
                </span>
                <p className="text-[#CCCCCC]">{children}</p>
            </div>
            <button className="border-[1px] px-3 py-2 border-white rounded-[8px] text-[#DDDDDD]">Activate</button>
        </div>
    )
}

export default CardActive