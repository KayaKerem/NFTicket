import { ethers } from "ethers";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { Collection } from "./components/pages/Collection";
import { Home } from "./components/pages/Home";
import { Launchpad } from "./components/pages/Launchpad";
import { Profile } from "./components/pages/Profile";
import { SideBar } from "./components/SideBar";
import NFT from "./assets/png/nft.png";
import { Detail } from "./components/pages/Detail";

function App() {
  const [account, setAccount] = useState("");

  let loc = useLocation();

  loc = loc.pathname.slice(1);

  function connect() {
    if (!window.ethereum) {
      alert("Metamask is not installed");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    const signer = provider.getSigner();
    signer.getAddress().then((account) => console.log(account));
  }

  const ticket = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    name: "TEXT NFT",
    price: 100,
    description: "Deneme",
    organizer: "Mor ve Ötesi",
  };

  const tickets = Array(20).fill(ticket);

  return (
    <>
      <SideBar account={account} connect={connect} />
      <main className="lg:pl-[calc(292px+32px)] lg:pr-[32px] px-5 pt-5 lg:pt-8 w-full pb-10">
        {loc === "detail" ? (
          <Routes>
            <Route path="detail" element={<Detail ticket={ticket} />}></Route>
          </Routes>
        ) : (
          <>
            <Header account={account} connect={connect} />
            <Routes>
              <Route path="/" element={<Home tickets={tickets} />}></Route>
              <Route path="collection" element={<Collection />}></Route>
              <Route path="launchpad" element={<Launchpad />}></Route>
              <Route path="profile" element={<Profile />}></Route>
            </Routes>
          </>
        )}
      </main>
    </>
  );
}

export default App;
