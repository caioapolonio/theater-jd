import {CardActive} from "./index.js"

function Active() {
    return (
        <>
            <div className="w-full px-4 max-w-[1200px]">
                <h2 className="font-bold mb-3.5">Active Rewards</h2>
                <div className="flex flex-col gap-4 w-full">
                    <CardActive>Free Movie Ticket</CardActive>
                    <CardActive>Free Birthday Popcorn</CardActive>
                </div>
            </div>
            <hr className="bg-[#262626] h-[1px] w-full max-w-[1200px]"/>
        </>
    )
}

export default Active