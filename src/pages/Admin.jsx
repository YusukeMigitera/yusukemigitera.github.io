import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Web3 from "web3";
import PrivateRoute from "../components/PrivateRoute";
import { useAuth } from "../hooks/use-auth";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
// import * as bs58 from "bs58";

const address = process.env.REACT_APP_ADDRESS;

export const Admin = () => {
  const auth = useAuth();
  const [ethBalance, setEthBalance] = useState();
  const [maticBalance, setMaticBalance] = useState();
  const [solBalance, setSolBalance] = useState();

  const ethereumWeb3 = new Web3(
    new Web3.providers.HttpProvider(process.env.REACT_APP_ETHEREUM_API)
  );
  const polygonWeb3 = new Web3(
    new Web3.providers.HttpProvider(process.env.REACT_APP_POLYGON_API)
  );

  const getEthBalance = async () => {
    const address = await process.env.REACT_APP_ADDRESS;
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
    const address = await process.env.REACT_APP_ADDRESS;
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

  const connection = new Connection(process.env.REACT_APP_SOLANA_API);
  // const feePayer = Keypair.fromSecretKey(
  //   bs58.decode(process.env.REACT_APP_SOLANA_SECRET_KEY)
  // );
  const getSolBalance = async () => {
    // let balance = await connection.getBalance(feePayer.publicKey);
    console.log("getSolBalance, connection: ", connection);
    setSolBalance(3.7 / LAMPORTS_PER_SOL);
  };

  useEffect(() => {
    getEthBalance();
    getMaticBalance();
    getSolBalance();
  });

  return (
    <PrivateRoute>
      <header>
        <h1>
          <Link to="/">Yusuke Migitera</Link>
        </h1>
      </header>
      <main>
        <h2>Assets</h2>
        <p>address: {address}</p>
        <h3>Ethereum</h3>
        <p>{ethBalance}</p>
        <h3>Polygon</h3>
        <p>{maticBalance}</p>
        <h3>Solana</h3>
        <p>{solBalance}</p>
      </main>
      <footer>
        <Link to="/admin">Admin</Link>
        {auth.isAuthenticated && (
          <button onClick={() => auth.signOut()}>ログアウト</button>
        )}
      </footer>
    </PrivateRoute>
  );
};
