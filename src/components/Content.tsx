import { FC, useCallback, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  clusterApiUrl,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { Connection } from "@metaplex/js";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import Footer from "../sections/Footer";
import PropertyDetail from "../pages/PropertyDetail";
import ScrollToTop from "./ScrollToTop";
import Profile from "../pages/Profile";

let thelamports = 0;
let theWallet = "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9";

const Content: FC = () => {
  let [lamports, setLamports] = useState(0.1);
  let [wallet, setWallet] = useState(
    "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9"
  );

  const connection = new Connection(clusterApiUrl("devnet"));
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    connection.getBalance(publicKey).then((bal: any) => {
      console.log(bal / LAMPORTS_PER_SOL);
    });

    let lamportsI = LAMPORTS_PER_SOL * lamports;
    console.log(publicKey.toBase58());
    console.log("lamports sending: {}", thelamports);
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(theWallet),
        lamports: lamportsI,
      })
    );

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, "processed");
  }, [publicKey, sendTransaction, connection]);

  function setTheLamports(e: any) {
    console.log(Number(e.target.value));
    setLamports(Number(e.target.value));
    lamports = e.target.value;
    thelamports = lamports;
  }
  function setTheWallet(e: any) {
    setWallet(e.target.value);
    theWallet = e.target.value;
  }

  return (
    <div className="font-Pry">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <ScrollToTop />

      <Footer />

      {/* <div>
        <input
          value={lamports}
          className="border-[2px] border-red-700"
          type="number"
          onChange={(e) => setTheLamports(e)}
        />
        <button className="btn" onClick={onClick}>
          Send Sol
        </button>
      </div> */}
    </div>
  );
};

export default Content;
