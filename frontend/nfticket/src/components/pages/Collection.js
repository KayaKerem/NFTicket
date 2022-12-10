import { useState } from "react";
import { ButtonGroup } from "../ButtonGroup";
import { ShowCollection } from "../ShowCollection";

export const Collection = ({ collections, isConnected }) => {
  const [ref, setRef] = useState("all");

  const HandleClick = (e) => {
    document.getElementById(ref).classList.remove("active");
    const id = e.currentTarget.id;
    document.getElementById(id).classList.add("active");
    setRef(id);
  };

  const sportsCol = collections.filter((e) => {
    return e.tur === "sport";
  });

  const theatreCol = collections.filter((e) => {
    return e.tur === "theatre";
  });

  const concertCol = collections.filter((e) => {
    return e.tur === "concert";
  });

  let allLan = sportsCol.concat(theatreCol, concertCol);

  allLan.sort((a, b) => a.floorPrice - b.floorPrice);

  return (
    <div className="mt-10">
      <div className="mt-7">
        <ButtonGroup HandleClick={HandleClick} pageName="Collections  " />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-6">
          {ref === "all" &&
            allLan.map((a) => (
              <ShowCollection ticket={a} isConnected={isConnected} />
            ))}
          {ref === "concert" &&
            concertCol.map((a) => (
              <ShowCollection ticket={a} isConnected={isConnected} />
            ))}
          {ref === "sport" &&
            sportsCol.map((a) => (
              <ShowCollection ticket={a} isConnected={isConnected} />
            ))}
          {ref === "theatre" &&
            theatreCol.map((a) => (
              <ShowCollection ticket={a} isConnected={isConnected} />
            ))}
        </div>
      </div>
    </div>
  );
};
