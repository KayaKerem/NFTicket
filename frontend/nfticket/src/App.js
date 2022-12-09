import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Collection } from "./components/pages/Collection";
import { Home } from "./components/pages/Home";
import { Launchpad } from "./components/pages/Launchpad";
import { Profile } from "./components/pages/Profile";
import { SideBar } from "./components/SideBar";

function App() {
  const [account, setAccount] = useState("");

  return (
    <>
      <SideBar account={account} />
      <main className="lg:pl-[calc(292px+32px)] lg:pr-[32px] px-5 pt-5 lg:pt-8 w-full pb-10">
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
