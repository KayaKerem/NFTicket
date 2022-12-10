import { ethers } from "ethers";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { Collection } from "./components/pages/Collection";
import { Home } from "./components/pages/Home";
import { Launchpad } from "./components/pages/Launchpad";
import { Profile } from "./components/pages/Profile";
import { SideBar } from "./components/SideBar";
import { Detail } from "./components/pages/Detail";
import { useSelector } from "react-redux";

function App() {
  const [account, setAccount] = useState("");
  const launch = useSelector((state) => state.launch.launch);

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
    id: 1,
    price: 100,
  };

  const ticket1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    id: 2,
    price: 200,
  };
  const ticket2 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162205187489812/ticket-3.png?width=1440&height=466",
    id: 3,
    price: 150,
  };

  const thatreLan1C = {
    nfts: [ticket, ticket1, ticket2],
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    name: "3 Maymun",
    description: "Haluk Bilginer'in Zorlu PSM'de muhteşem performansı",
    date: "02 : 10 : 2023",
    tur: "theatre",
    type: "Vip",
  };

  const thatreLan2C = {
    nfts: [ticket, ticket1, ticket2],
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    name: "Kral Arthur",
    description: "1745 yıllarına geri dönüş",
    date: "02 : 10 : 2023",
    tur: "theatre",
    type: "Normal",
  };

  const sportLan1C = {
    nfts: [ticket, ticket1, ticket2],
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    name: "Fenerbahçe-Galatasaray ",
    description: "6 Ocak Kadıköy Stadyumunda oynanacak derbi",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Vip",
  };

  const sportLan2C = {
    nfts: [ticket, ticket1, ticket2],
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    name: "Konyaspor-Başakşehir ",
    description: "Cumartesi akşamı futbol şöleni",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Normal",
  };

  const sportLan3C = {
    nfts: [ticket, ticket1, ticket2],
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162205187489812/ticket-3.png?width=1440&height=466",
    name: "Beşiktaş-Trabzonspor ",
    description: "Şampiyonluk yarışı",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Normal",
  };

  const concert1C = {
    nfts: [ticket, ticket1, ticket2],
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    name: "Mor ve Ötesi",
    description: "27 Aralık İstabul Vodafone Park Mor ve Ötesi Konseri",
    date: "02 : 10 : 2023",
    tur: "concert",
    type: "vip",
  };

  const thatreLan1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    name: "3 Maymun",
    description: "Haluk Bilginer'in Zorlu PSM'de muhteşem performansı",
    date: "02 : 10 : 2023",
    tur: "theatre",
    type: "Vip",
  };

  const thatreLan2 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    name: "Kral Arthur",
    description: "1745 yıllarına geri dönüş",
    date: "02 : 10 : 2023",
    tur: "theatre",
    type: "Normal",
  };

  const sportLan1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    name: "Fenerbahçe-Galatasaray ",
    description: "6 Ocak Kadıköy Stadyumunda oynanacak derbi",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Vip",
  };

  const sportLan2 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    name: "Konyaspor-Başakşehir ",
    description: "Cumartesi akşamı futbol şöleni",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Normal",
  };

  const sportLan3 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162205187489812/ticket-3.png?width=1440&height=466",
    name: "Beşiktaş-Trabzonspor ",
    description: "Şampiyonluk yarışı",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Normal",
  };

  const concert1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    name: "Mor ve Ötesi",
    description: "27 Aralık İstabul Vodafone Park Mor ve Ötesi Konseri",
    date: "02 : 10 : 2023",
    tur: "concert",
    type: "vip",
  };

  const launchpads = [
    concert1,
    sportLan1,
    sportLan3,
    sportLan2,
    thatreLan1,
    thatreLan2,
  ];

  const tickets = Array(20).fill(1);

  return (
    <>
      <SideBar account={account} connect={connect} />
      <main className="lg:pl-[calc(292px+32px)] lg:pr-[32px] px-5 pt-5 lg:pt-8 w-full pb-10">
        {loc === "detail" ? (
          <Routes>
            <Route path="detail" element={<Detail ticket={launch} />}></Route>
          </Routes>
        ) : (
          <>
            <Header account={account} connect={connect} />
            <Routes>
              <Route path="/" element={<Home tickets={tickets} />}></Route>
              <Route
                path="collection"
                element={<Collection collections={collections} />}
              ></Route>
              <Route
                path="launchpad"
                element={<Launchpad launchPads={launchpads} />}
              ></Route>
              <Route path="profile" element={<Profile />}></Route>
            </Routes>
          </>
        )}
      </main>
    </>
  );
}

export default App;
