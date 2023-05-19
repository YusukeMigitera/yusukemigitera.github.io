import PrivateRoute from "../components/PrivateRoute";
import TokenTable, { Row } from "../components/TokenTable";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEthBalance, useMaticBalance } from "../hooks/useWeb3";

export const Admin = () => {
  const address = import.meta.env.VITE_ADDRESS;
  const ethBalance = useEthBalance();
  const maticBalance = useMaticBalance();

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
      </main>
      <Footer />
    </PrivateRoute>
  );
};
