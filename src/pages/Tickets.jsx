import Navbar from "../components/Navbar";
import Ticket from "../components/ticket";

const Tickets = () => {

  const upComings = [{
    url: "https://s3-alpha-sig.figma.com/img/93fd/94b2/c8c2747e5324633493961e9ad361c26e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjmvpwPwgK8LU5kbUAZ2~dBULnZCJ1p0drYUQ5LDgm~eaiQtB~yuj42FJ~Wtj9tLKC1XU60HxFiAQFV5MShZVomma8AlpKLJkXt7GnoicKZDSBslHMtpoXqoAjmNad-CEy8GCPGeaRvL66HAFCPV-RR4P6k396n6ng88DWEPGa-elwppJiowz08NtyZRzw9ImFW4OY5RKiv7NMYsPCZjpKxqjZVf2jxEYCYZrlEMKeeIhuD1FVuw5U4-sqEuSxdZRBvaxGTebR1SNXsumiJXziNtUpbysMr9irE2CQIu~vBnHudv4CySrN7aRhCOJp4-MUxR0KxuLxgoMAMwfxpGgQ__",
    alt: "Capa do filme parasite",
    nome: "Parasite",
    data: "12/5/2019",
    horario: "2:45 PM",
    paddingTop: "36px"
  }];

  const recents = [{
    url: "https://s3-alpha-sig.figma.com/img/a383/e306/d90089b7bcdf9069dceb20139ecc9b2c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ta8rJ6mfZ7vigY2bh6Lnpp7LIo0WU6eiaZAf9EPHAt3hZU3TC0XhUy6~bWMLQ51nKXGLgqiivjDo0NL68zvUUJIX~0d~2xXnaG3~-Ni07vVzqXpt26heCdDbaKMmgZKikzTuKoj79itoZD-JxFFUgWbhYZJVoZjlmyEW-4d1olDPQHhHWY98C9heP43gTBFUyWc3mkAe5eLUCRlvZlM3n6iM2SHGJfJSMfV1Zk7KEsdVVn-HLyt6GqKzDAZgvrH2IYqYJ5I8ISNvAOB6GFKTdnfdhOclVldNi9-j29OI62POhOEFP3Auc7zu~ncmuJXuAyKUxG-8wwSOArhcJJaIUw__",
    alt: "Capa do filme midway",
    nome: "Midway",
    data: "12/5/2019",
    horario: "2:45 PM",
    descricao: "135 4th St Suite 3000, San Francisco, CA 94103"
  },{
    url: "https://s3-alpha-sig.figma.com/img/e7ff/1c78/2e643e0c17317d30c2ab8bff3bea9049?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QjTvK9VjeBk-gvIKXdJyu0grSKLkeV-LHKo8CXTH0wJWsydVKIkU4QM1dCLC7AgmyhzZKIs3aZTtkDGyaOgy5dDsGHG2Zr8sV4jdIoLZP0SN4XmMn96JZ02BfT199na8BAGD8hh7MD~rabwhOPizfNVKCU7ZPldE3dG6b1DLEra89jNTrV-x~BLqkxQuVWHbXaZ4QhCizUcCTv3k2EwU1njCC-g87QkCEU0bsbDvVpGx26snHFEnjn31-qRSAOHYvfIlZ-PuCnBs5cKV2cES6f6OS73L0ORiTMc4h-okZHfC84juwqgUfO-4nFJ9FIjc5gYqqKdHfVk0YUkNL~M2uQ__",
    alt: "Capa do filme frozen ll",
    nome: "Frozen ll",
    data: "12/1/2019",
    horario: "2:00 PM",
    descricao: "135 4th St Suite 3000, San Francisco, CA 94103"
  }, {
    url: "https://s3-alpha-sig.figma.com/img/82b7/6bd6/53f70cfaa0d84040487b40944957d35b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxzLc48zaR3ocA07R7-jfwvl-6VPmtS9PtrE25CDUITcvh5gzaGjUWrSeANByrUbh4omCgmOvnWCY4yQGnyLCAsfNFcC0lKCJ4s9tBeBUujsdTqtGq33l7gxcCT~LwTkJXbUUWD15kcp85ryTgwcVnl-v2cuFfPEQiq9W9qUJJ7nsCj8PTaoT05VFZrEfj1YDvyZ40NJzk-ktz3s5iZOT5q4uRJKHCCux9GdKvVjVUdjvMJvK93H~3B0SQYML6E8GCmsjIgaGBAm9-I6VLIPhucCoXB33CSyH59ING5PgQ9fjjHaCLwOJEr7O8Q6JmpzDIOsCufSl53VUSLssFVngg__",
    alt: "Capa do filme Weathering with You",
    nome: "Weathering with You",
    data: "23/1/2019",
    horario: "4:00 PM",
    descricao: "1881 Post St, San Francisco, CA 94115"
    
  }]

  return (
    <div className="flex flex-col min-h-screen bg-[#151515] text-white pb-[52px]">
      <h1 className="mx-[16px] mt-[28px] font-black text-3xl text-[#EEEEEE]">My Tickets</h1>
      <h2 className="mt-[31px] mx-[16px] mb-[16px] font-bold text-[16px]">Upcoming</h2>
      {upComings.map((recent, index) =>
         (<Ticket 
          key={index} 
          url={recent.url}
          alt={recent.alt}
          nome={recent.nome}
          data={recent.data}
          horario={recent.horario}
          padding={recent.paddingTop}
            />))}
      <h2 className="mt-[20px] mx-[16px] mb-[10px] font-bold text-[16px]">Recent</h2>
      {recents.map((recent, index) =>
         (<Ticket 
            key={index} 
            url={recent.url}
            alt={recent.alt}
            nome={recent.nome}
            data={recent.data}
            horario={recent.horario}
            descricao={recent.descricao}
            />))}
      <Navbar />
    </div>

  );
};

export default Tickets;
