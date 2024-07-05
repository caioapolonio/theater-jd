function Details() {
    return (
        <div className="flex flex-wrap gap-1 justify-between w-full px-4 pt-5 max-w-[1200px]">
            <h2 className="font-bold">Account Details</h2>
            <menu className="space-y-2">
                <li className="text-[#4A80E8]"><a href="/">Update email</a></li>
                <li className="text-[#4A80E8]"><a href="/">Change password</a></li>
                <li className="text-[#E84A4A]"><a href="/">Delete account</a></li>
            </menu>
        </div>
    )
}

export default Details