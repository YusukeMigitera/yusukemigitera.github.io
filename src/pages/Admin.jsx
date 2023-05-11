import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Web3 from "web3";
import PrivateRoute from "../components/PrivateRoute";
import { useAuth } from "../hooks/use-auth";
const address = process.env.REACT_APP_ADDRESS;

export const Admin = () => {
  const auth = useAuth();
  const [balance, setBalance] = useState();

  const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.REACT_APP_API_URL)
  );

  const getBalance = async () => {
    const address = await process.env.REACT_APP_ADDRESS;
    web3.eth.getBalance(address, (error, weiBalance) => {
      console.log("getBalance");
      if (error) {
        console.error(`Error getting balance for address ${address}:`, error);
        return;
      }

      const etherBalance = web3.utils.fromWei(weiBalance, "ether");
      setBalance(etherBalance);
    });
  };
  useEffect(() => {
    getBalance();
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
        <p>{balance}</p>
        <h3>Polygon</h3>
        <p>0</p>
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
