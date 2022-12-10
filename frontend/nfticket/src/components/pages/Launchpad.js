import { useState } from "react";
import { ButtonGroup } from "../ButtonGroup";
import { Ticket } from "../Ticket";

export const Launchpad = () => {
  const [ref, setRef] = useState("all");

  const HandleClick = (e) => {
    document.getElementById(ref).classList.remove("active");
    const id = e.currentTarget.id;
    document.getElementById(id).classList.add("active");
    setRef(id);
  };

  const ticket = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    name: "TEXT NFT",
  };

  const SportTickets = Array(5).fill(ticket);
  const Concertickets = Array(3).fill(ticket);
  const TheatreTickets = Array(2).fill(ticket);
  const MetaverseTickets = Array(6).fill(ticket);

  const allTickets = SportTickets.concat(
    Concertickets,
    TheatreTickets,
    MetaverseTickets
  );

  return (
    <div className="mt-10">
      <div className="mt-7">
        <ButtonGroup HandleClick={HandleClick} pageName="LaunchPad" />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-6">
          {ref === "all" &&
            allTickets.map((a) => <Ticket img={a.img} name={a.name} />)}
          {ref === "concert" &&
            Concertickets.map((a) => <Ticket img={a.img} name={a.name} />)}
          {ref === "sport" &&
            SportTickets.map((a) => <Ticket img={a.img} name={a.name} />)}
          {ref === "theatre" &&
            TheatreTickets.map((a) => <Ticket img={a.img} name={a.name} />)}
          {ref === "metaverse" &&
            MetaverseTickets.map((a) => <Ticket img={a.img} name={a.name} />)}
        </div>
      </div>
    </div>
  );
};
