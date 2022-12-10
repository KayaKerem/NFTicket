import { ethers } from "ethers";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Collection } from "./components/pages/Collection";
import { Home } from "./components/pages/Home";
import { Launchpad } from "./components/pages/Launchpad";
import { Profile } from "./components/pages/Profile";
import { SideBar } from "./components/SideBar";

function App() {
  const [account, setAccount] = useState("");
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

  return (
    <>
      <SideBar account={account} connect={connect} />
      <main className="lg:pl-[calc(292px+32px)] lg:pr-[32px] px-5 pt-5 lg:pt-8 w-full pb-10">
        <Header account={account} connect={connect} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="collection" element={<Collection />}></Route>
          <Route path="launchpad" element={<Launchpad />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
