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
import { Nfts } from "./components/pages/Nfts";
import { NftDetail } from "./components/pages/NftDetail";

function App() {
  const [account, setAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const launch = useSelector((state) => state.launch.launch);
  const collection = useSelector((state) => state.collection.collection);
  const nft = useSelector((state) => state.nft.nft);

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
        setIsConnected(true);
      })
      .catch((err) => {
        console.log(err);
      });
    const signer = provider.getSigner();
  }

  const ticketT1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    id: 1,
    price: 100,
    chainNum: 32,
    collectionName: "Kampüs 3.0",
    date: "02 : 10 : 2023",
    description: "A theatre by tamer Yılmaz",
    place: "Davutpasa Campus",
  };

  const ticket1T1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    id: 2,
    price: 150,
    chainNum: 17,
    collectionName: "Kampüs 3.0",
    date: "02 : 10 : 2023",
    description: "A theatre by tamer Yılmaz",
    place: "Davutpasa Campus",
  };
  const ticket2T1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162205187489812/ticket-3.png?width=1440&height=466",
    id: 3,
    price: 200,
    chainNum: 28,
    collectionName: "Kampüs 3.0",
    date: "02 : 10 : 2023",
    description: "A theatre by tamer Yılmaz",
    place: "Davutpasa Campus",
  };

  const thatreLan1C = {
    nfts: [
      ticketT1,
      ticket1T1,
      ticket2T1,
      ticketT1,
      ticket1T1,
      ticket2T1,
      ticketT1,
      ticket1T1,
      ticket2T1,
    ],
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051285018045054996/Purple_Modern_Future_Destiny_Movie_Poster.png",
    name: "Kampüs 3.0",
    description: "A theatre by tamer Yılmaz",
    date: "02 : 10 : 2023",
    tur: "theatre",
    type: "Vip",
    place: "Davutpaşa Campus",
    floorPrice: 100,
  };

  const ticketT2 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    id: 1,
    price: 100,
    chainNum: 32,
    collectionName: "Amadeus",
    date: "02 : 10 : 2023",
    description: "1745 yıllarına geri dönüş",
    place: "Istanbul",
  };

  const ticket1T2 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    id: 2,
    price: 150,
    chainNum: 17,
    collectionName: "Amadeus",
    date: "02 : 10 : 2023",
    description: "1745 yıllarına geri dönüş",
    place: "Istanbul",
  };
  const ticket2T2 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162205187489812/ticket-3.png?width=1440&height=466",
    id: 3,
    price: 200,
    chainNum: 28,
    collectionName: "Amadeus",
    date: "02 : 10 : 2023",
    description: "1745 yıllarına geri dönüş",
    place: "Istanbul",
  };

  const thatreLan2C = {
    nfts: [
      ticketT2,
      ticket1T2,
      ticket2T2,
      ticketT2,
      ticket1T2,
      ticket2T2,
      ticketT2,
      ticket1T2,
      ticket2T2,
    ],
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051287472090382427/Dark_Full_Photo_Minimalist_Theatrical_Acting_Classes_Poster.png",
    name: "Amadeus",
    description: "1745 yıllarına geri dönüş",
    date: "02 : 10 : 2023",
    tur: "theatre",
    type: "Normal",
    place: "Istanbul",
    floorPrice: 122,
  };

  const ticketS1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    id: 1,
    price: 100,
    chainNum: 32,
    collectionName: "Fenerbahçe-Galatasaray",
    date: "02 : 10 : 2023",
    description: "6 Ocak Kadıköy Stadyumunda oynanacak derbi",
    place: "Istanbul",
  };

  const ticket1S1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    id: 2,
    price: 150,
    chainNum: 17,
    collectionName: "Fenerbahçe-Galatasaray",
    date: "02 : 10 : 2023",
    description: "6 Ocak Kadıköy Stadyumunda oynanacak derbi",
    place: "Istanbul",
  };
  const ticket2S1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162205187489812/ticket-3.png?width=1440&height=466",
    id: 3,
    price: 200,
    chainNum: 28,
    collectionName: "Fenerbahçe-Galatasaray",
    date: "02 : 10 : 2023",
    description: "6 Ocak Kadıköy Stadyumunda oynanacak derbi",
    place: "Istanbul",
  };

  const sportLan1C = {
    nfts: [
      ticketS1,
      ticket1S1,
      ticket2S1,
      ticketS1,
      ticket1S1,
      ticket2S1,
      ticketS1,
      ticket1S1,
      ticket2S1,
    ],
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051285775272120420/Blue_Photo_of_Soccer_Players_Duel_Soccer_Poster.png",
    name: "Fenerbahçe-Galatasaray ",
    description: "6 Ocak Kadıköy Stadyumunda oynanacak derbi",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Vip",
    place: "Istanbul",
    floorPrice: 125,
  };

  const ticketS2 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    id: 1,
    price: 100,
    chainNum: 32,
    collectionName: "Beşiktaş-Trabzonspor",
    date: "02 : 10 : 2023",
    description: "Cumartesi akşamı futbol şöleni",
    place: "Istanbul",
  };

  const ticket1S2 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    id: 2,
    price: 150,
    chainNum: 17,
    collectionName: "Beşiktaş-Trabzonspor",
    date: "02 : 10 : 2023",
    description: "Cumartesi akşamı futbol şöleni",
    place: "Istanbul",
  };
  const ticket2S2 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162205187489812/ticket-3.png?width=1440&height=466",
    id: 3,
    price: 200,
    chainNum: 28,
    collectionName: "Beşiktaş-Trabzonspor",
    date: "02 : 10 : 2023",
    description: "Cumartesi akşamı futbol şöleni",
    place: "Istanbul",
  };

  const sportLan2C = {
    nfts: [
      ticketS2,
      ticket1S2,
      ticket2S2,
      ticketS2,
      ticket1S2,
      ticket2S2,
      ticketS2,
      ticket1S2,
      ticket2S2,
    ],
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051294175011803166/White_Modern_Football_Match_Poster.png",
    name: "Beşiktaş-Trabzonspor",
    description: "Cumartesi akşamı futbol şöleni",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Normal",
    place: "Istanbul",
    floorPrice: 100,
  };

  const ticketS3 = {
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051292137716731924/Orange_Black_and_White_Soccer_Poster_1.png",
    id: 1,
    price: 100,
    chainNum: 32,
    collectionName: "Konyaspor-Başakşehir",
    date: "02 : 10 : 2023",
    description: "Şampiyonluk yarışı",
    place: "Istanbul",
  };

  const ticket1S3 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    id: 2,
    price: 150,
    chainNum: 17,
    collectionName: "Konyaspor-Başakşehir",
    date: "02 : 10 : 2023",
    description: "Şampiyonluk yarışı",
    place: "Istanbul",
  };
  const ticket2S3 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162205187489812/ticket-3.png?width=1440&height=466",
    id: 3,
    price: 200,
    chainNum: 28,
    collectionName: "Konyaspor-Başakşehir",
    date: "02 : 10 : 2023",
    description: "Şampiyonluk yarışı",
    place: "Istanbul",
  };

  const sportLan3C = {
    nfts: [
      ticketS3,
      ticket1S3,
      ticket2S3,
      ticketS3,
      ticket1S3,
      ticket2S3,
      ticketS3,
      ticket1S3,
      ticket2S3,
    ],
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051290176552452096/Black_and_White_Minimalist_Soccer_Match_Instagram_Story.png",
    name: "Beşiktaş-Trabzonspor ",
    description: "Şampiyonluk yarışı",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Normal",
    place: "Istanbul",
    floorPrice: 150,
  };

  const ticketC1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162203933388800/ticket-1.png?width=1440&height=466",
    id: 1,
    price: 100,
    chainNum: 32,
    collectionName: "Mor ve Ötesi",
    date: "02 : 10 : 2023",
    description: "27 Aralık İstabul Vodafone Park Mor ve Ötesi Konseri",
    place: "Istanbul",
  };

  const ticket1C1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162204772257812/ticket-2.png?width=1440&height=466",
    id: 2,
    price: 150,
    chainNum: 17,
    collectionName: "Mor ve Ötesi",
    date: "02 : 10 : 2023",
    description: "27 Aralık İstabul Vodafone Park Mor ve Ötesi Konseri",
    place: "Istanbul",
  };
  const ticket2C1 = {
    img: "https://media.discordapp.net/attachments/1050869941517168660/1051162205187489812/ticket-3.png?width=1440&height=466",
    id: 3,
    price: 200,
    chainNum: 28,
    collectionName: "Mor ve Ötesi",
    date: "02 : 10 : 2023",
    description: "27 Aralık İstabul Vodafone Park Mor ve Ötesi Konseri",
    place: "Istanbul",
  };

  const concert1C = {
    nfts: [
      ticketC1,
      ticket1C1,
      ticket2C1,
      ticketC1,
      ticket1C1,
      ticket2C1,
      ticketC1,
      ticket1C1,
      ticket2C1,
    ],
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051286563146961007/Live_Concert_Poster.png",
    name: "Mor ve Ötesi",
    description: "27 Aralık İstabul Vodafone Park Mor ve Ötesi Konseri",
    date: "02 : 10 : 2023",
    tur: "concert",
    type: "Vip",
    place: "Istanbul",
    floorPrice: 75,
  };

  const collections = [
    concert1C,
    sportLan1C,
    sportLan3C,
    sportLan2C,
    thatreLan1C,
    thatreLan2C,
  ];

  const thatreLan1 = {
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051285018045054996/Purple_Modern_Future_Destiny_Movie_Poster.png",
    name: "Kampüs 3.0",
    description: "A theatre by tamer Yılmaz",
    date: "02 : 10 : 2023",
    tur: "theatre",
    type: "Vip",
  };

  const thatreLan2 = {
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051287472090382427/Dark_Full_Photo_Minimalist_Theatrical_Acting_Classes_Poster.png",
    name: "Amadeus",
    description: "1745 yıllarına geri dönüş",
    date: "02 : 10 : 2023",
    tur: "theatre",
    type: "Normal",
  };

  const sportLan1 = {
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051285775272120420/Blue_Photo_of_Soccer_Players_Duel_Soccer_Poster.png",
    name: "Fenerbahçe-Galatasaray ",
    description: "6 Ocak Kadıköy Stadyumunda oynanacak derbi",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Vip",
  };

  const sportLan2 = {
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051292137716731924/Orange_Black_and_White_Soccer_Poster_1.png",
    name: "Konyaspor-Başakşehir ",
    description: "Cumartesi akşamı futbol şöleni",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Normal",
  };

  const sportLan3 = {
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051294175011803166/White_Modern_Football_Match_Poster.png",
    name: "Beşiktaş-Trabzonspor ",
    description: "Şampiyonluk yarışı",
    date: "02 : 10 : 2023",
    tur: "sport",
    type: "Normal",
  };

  const concert1 = {
    img: "https://cdn.discordapp.com/attachments/1050869941517168660/1051286563146961007/Live_Concert_Poster.png",
    name: "Mor ve Ötesi",
    description: "27 Aralık İstabul Vodafone Park Mor ve Ötesi Konseri",
    date: "02 : 10 : 2023",
    tur: "concert",
    type: "Vip",
  };

  const launchpads = [
    concert1,
    sportLan1,
    sportLan3,
    sportLan2,
    thatreLan1,
    thatreLan2,
  ];

  // const tickets = Array(20).fill(1);

  return (
    <>
      <SideBar account={account} connect={connect} />
      <main className="lg:pl-[calc(292px+32px)] lg:pr-[32px] px-5 pt-5 lg:pt-8 w-full pb-10">
        {loc === "detail" || loc === "nfts" || loc === "nftDetail" ? (
          <Routes>
            <Route path="detail" element={<Detail ticket={launch} />}></Route>
            <Route path="nfts" element={<Nfts ticket={collection} />}></Route>
            <Route path="nftDetail" element={<NftDetail nft={nft} />}></Route>
          </Routes>
        ) : (
          <>
            <Header account={account} connect={connect} />
            <Routes>
              <Route
                path="/"
                element={
                  <Home launchs={launchpads} collections={collections} />
                }
              ></Route>
              <Route
                path="collection"
                element={
                  <Collection
                    collections={collections}
                    isConnected={isConnected}
                  />
                }
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
