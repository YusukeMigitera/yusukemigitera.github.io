import { useState } from "react";
import "./App.css";
import Web3 from "web3";

function App() {
  const [balance, setBalance] = useState();

  const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.REACT_APP_API_URL)
  );
  const address = process.env.REACT_APP_ADDRESS;

  const getBalance = () =>
    web3.eth.getBalance(address, (error, weiBalance) => {
      if (error) {
        console.error(`Error getting balance for address ${address}:`, error);
        return;
      }

      const etherBalance = web3.utils.fromWei(weiBalance, "ether");
      console.log(`Balance for address ${address}: ${etherBalance} ETH`);
      setBalance(etherBalance);
    });

  return (
    <div>
      <header>
        <h1>Assets</h1>
      </header>
      <main>
        <p>address: {address}</p>
        <button onClick={getBalance}>getBalance</button>
        <h2>Ethereum</h2>
        <p>{balance}</p>
        <h2>Polygon</h2>
        <p>0</p>
      </main>
    </div>
  );
}

export default App;
