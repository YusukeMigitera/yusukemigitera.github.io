import PrivateRoute from "../components/PrivateRoute";
import TokenTable, { Row } from "../components/TokenTable";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEtherScan, usePolygonScan } from "../hooks/useScan";

export const Admin = () => {
  const address = import.meta.env.VITE_ADDRESS;
  const [ethBalance, rethBalance] = useEtherScan();
  const [maticBalance, jpycBalance] = usePolygonScan();

  const ethRow: Row = {
    name: "ETH",
    amount: String(ethBalance),
    usd: 0,
    jpy: 0,
  };

  const rethRow: Row = {
    name: "rETH",
    amount: String(rethBalance),
    usd: 0,
    jpy: 0,
  };

  const maticRow: Row = {
    name: "MATIC",
    amount: String(maticBalance),
    usd: 0,
    jpy: 0,
  };

  const jpycRow: Row = {
    name: "JPYC",
    amount: String(jpycBalance),
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
