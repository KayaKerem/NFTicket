import { useState } from "react";
import { ButtonGroup } from "../ButtonGroup";
import { Ticket } from "../Ticket";

export const Launchpad = (props) => {
  const { launchPads } = props;

  const [ref, setRef] = useState("all");

  const HandleClick = (e) => {
    document.getElementById(ref).classList.remove("active");
    const id = e.currentTarget.id;
    document.getElementById(id).classList.add("active");
    setRef(id);
  };

  const sportsLan = launchPads.filter((e) => {
    return e.tur === "sport";
  });

  const theatreLan = launchPads.filter((e) => {
    return e.tur === "theatre";
  });

  const concertLan = launchPads.filter((e) => {
    return e.tur === "concert";
  });

  const allLan = sportsLan.concat(theatreLan, concertLan);

  return (
    <div className="mt-10">
      <div className="mt-7">
        <ButtonGroup HandleClick={HandleClick} pageName="LaunchPad" />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-6">
          {ref === "all" && allLan.map((a) => <Ticket ticket={a} />)}
          {ref === "concert" && concertLan.map((a) => <Ticket ticket={a} />)}
          {ref === "sport" && sportsLan.map((a) => <Ticket ticket={a} />)}
          {ref === "theatre" && theatreLan.map((a) => <Ticket ticket={a} />)}
        </div>
      </div>
    </div>
  );
};