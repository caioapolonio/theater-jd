function Account() {
    return (
        <>
            <div className="w-full space-y-8 px-4 max-w-[1200px]">
                <h1 className="font-black text-[32px]">My Account</h1>
                <div className="w-full">
                    <ul className="w-full space-y-4">
                        <li className="flex flex-wrap gap-1 justify-between w-[90%]">
                            <strong>Name</strong>
                            <p className="text-[#CCCCCC]">Hanna kim</p>
                        </li>
                        <li className="flex flex-wrap gap-1 justify-between w-[90%]">
                            <strong>Member Since</strong>
                            <p className="text-[#CCCCCC]">July 14, 2018</p>
                        </li>
                        <li className="flex flex-wrap gap-1 justify-between w-[90%]">
                            <strong>Total Savings</strong>
                            <p className="text-[#CCCCCC]">$43.98</p>
                        </li>
                        <li className="flex flex-wrap gap-1 justify-between w-[90%]">
                            <strong>Movies Seen</strong>
                            <p className="text-[#CCCCCC]">63</p>
                        </li>

                    </ul>
                </div>
            </div>
            <hr className="bg-[#262626] h-[1px] w-full max-w-[1200px]"/>
        </>
    )
}

export default Account