import { useEffect, useState } from "react";
import Web3 from "web3";
import PrivateRoute from "../components/PrivateRoute";
import TokenTable, { Row } from "../components/TokenTable";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { Connection, Keypair } from "@solana/web3.js";
// import * as bs58 from "bs58";

const address = import.meta.env.VITE_ADDRESS;

export const Admin = () => {
  const [ethBalance, setEthBalance] = useState<string>();
  const [maticBalance, setMaticBalance] = useState<string>();
  // const [solBalance, setSolBalance] = useState();

  const ethereumWeb3 = new Web3(
    new Web3.providers.HttpProvider(import.meta.env.VITE_ETHEREUM_API || "")
  );
  const polygonWeb3 = new Web3(
    new Web3.providers.HttpProvider(import.meta.env.VITE_POLYGON_API || "")
  );

  const getEthBalance = async () => {
    const address = (await import.meta.env.VITE_ADDRESS) || "";
    ethereumWeb3.eth.getBalance(address, (error, weiBalance) => {
      console.log("getEthBalance");
      if (error) {
        console.error(
          `Error getting ether balance for address ${address}:`,
          error
        );
        return;
      }

      const balance = ethereumWeb3.utils.fromWei(weiBalance, "ether");
      setEthBalance(balance);
    });
  };
  const getMaticBalance = async () => {
    const address = (await import.meta.env.VITE_ADDRESS) || "";
    polygonWeb3.eth.getBalance(address, (error, weiBalance) => {
      console.log("getMaticBalance");
      if (error) {
        console.error(
          `Error getting matic balance for address ${address}:`,
          error
        );
        return;
      }

      const balance = polygonWeb3.utils.fromWei(weiBalance, "ether");
      setMaticBalance(balance);
    });
  };

  // const connection = new Connection(process.env.VITE_SOLANA_API);
  // const feePayer = Keypair.fromSecretKey(
  //   bs58.decode(process.env.VITE_SOLANA_SECRET_KEY)
  // );
  // const getSolBalance = async () => {
  // let balance = await connection.getBalance(feePayer.publicKey);
  // console.log("getSolBalance");
  // setSolBalance(balance / LAMPORTS_PER_SOL);
  // };

  useEffect(() => {
    getEthBalance();
    getMaticBalance();
    // getSolBalance();
  });

  const ethRow: Row = {
    name: "ETH",
    amount: Number(ethBalance || 0),
    usd: 0,
    jpy: 0,
  };

  const rethRow: Row = {
    name: "rETH",
    amount: 0,
    usd: 0,
    jpy: 0,
  };

  const maticRow: Row = {
    name: "MATIC",
    amount: Number(maticBalance || 0),
    usd: 0,
    jpy: 0,
  };

  const jpycRow: Row = {
    name: "JPYC",
    amount: 0,
    usd: 0,
    jpy: 0,
  };

  return (
    <PrivateRoute>
      <Header />
      <main>
        <h2>Assets</h2>
        <h3>Ethereum</h3>
        <p>address: {address}</p>
        <TokenTable rows={[ethRow, rethRow]} />
        <h3>Polygon</h3>
        <p>address: {address}</p>
        <TokenTable rows={[maticRow, jpycRow]} />
        {/* <h3>Solana</h3>
        <p>{solBalance}</p> */}
      </main>
      <Footer />
    </PrivateRoute>
  );
};
