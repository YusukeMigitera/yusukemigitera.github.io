import PrivateRoute from "../components/PrivateRoute";
import TokenTable, { Row } from "../components/TokenTable";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEtherScan, usePolygonScan } from "../hooks/useScan";
import { useCoinGecko } from "../hooks/useCoinGecko";

export const Admin = () => {
  const address = import.meta.env.VITE_ADDRESS;
  const [ethBalance, rethBalance] = useEtherScan();
  const [maticBalance, jpycBalance] = usePolygonScan();
  const [usdEth, jpyEth, usdReth, jpyReth, usdMatic, jpyMatic] = useCoinGecko();

  const ethRow: Row = {
    name: "ETH",
    amount: String(ethBalance),
    usd: String(ethBalance * (usdEth ?? 1)),
    jpy: String(ethBalance * (jpyEth ?? 1)),
  };

  const rethRow: Row = {
    name: "rETH",
    amount: String(rethBalance),
    usd: String(rethBalance * (usdReth ?? 1)),
    jpy: String(rethBalance * (jpyReth ?? 1)),
  };

  const maticRow: Row = {
    name: "MATIC",
    amount: String(maticBalance),
    usd: String(maticBalance * (usdMatic ?? 1)),
    jpy: String(maticBalance * (jpyMatic ?? 1)),
  };

  const jpycRow: Row = {
    name: "JPYC",
    amount: String(jpycBalance),
    usd: "0",
    jpy: "0",
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
        <h3>Total</h3>
        <p>
          ￥
          {ethBalance * (jpyEth ?? 1) +
            rethBalance * (jpyReth ?? 1) +
            maticBalance * (jpyMatic ?? 1)}
        </p>
      </main>
      <Footer />
    </PrivateRoute>
  );
};
