import {Account, Rewards, Active, Recently, Details} from '../components/MyAccount'

function MyAccount() {
    return (
        <section className="flex items-center flex-col gap-6 w-full min-h-svh py-5 pb-[52px] font-roboto text-white bg-[#151515]">
            <Account/>
            <Rewards/>
            <Active/>
            <Recently/>
            <Details/>
        </section>
    )
}

export default MyAccount