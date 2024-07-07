import DataPoster from "./DataPoster.js";

function Recently() {
    const posters = DataPoster

    return (
        <>
            <div className="w-full px-4 space-y-4 max-w-[1200px] overflow-hidden">
                <h2 className="font-bold">Active Rewards</h2>
                <div className="flex gap-2 w-full snap-x snap-mandatory overflow-x-scroll hide-scroll">
                    {posters.map((poster, i) => (
                        <picture key={i} className="shrink-0 snap-start">
                            <img src={poster.image || ""} alt="poster" className="object-cover"/>
                        </picture>
                    ))}
                </div>
            </div>
            <hr className="bg-[#262626] h-[1px] w-full max-w-[1200px]"/>
        </>
    )
}

export default Recently