import {Ticket} from "../../assets/icons"

function Rewards() {
    const lista = [...Array(10).keys()]

    return (
        <>
            <div className="w-full space-y-4 px-4 max-w-[1200px]">
                <h2 className="font-bold ">Rewards Progess</h2>
                <div className="w-full space-y-2.5">
                    <div className="flex flex-wrap gap-6 w-full">
                        {lista.map((item) => {
                            const freeTicket = item < 7
                            return (
                                <picture key={item} className="size-fit">
                                    <Ticket
                                        className={`size-12v fill-white ${freeTicket ? "fill-white" : "fill-[#888888]"}`}/>
                                </picture>
                            )
                        })}
                    </div>
                    <p className="font-bold text-[#888888]">3 movies until next free ticket</p>
                </div>
            </div>
            <hr className="bg-[#262626] h-[1px] w-full max-w-[1200px]"/>
        </>
    )
}

export default Rewards