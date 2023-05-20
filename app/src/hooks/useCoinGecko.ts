import { useEffect, useState } from "react";

export const useCoinGecko = () => {
  const [usdEth, setUsdEth] = useState(1);
  const [jpyEth, setJpyEth] = useState(1);
  const [usdReth, setUsdReth] = useState(1);
  const [jpyReth, setJpyReth] = useState(1);
  const [usdMatic, setUsdMatic] = useState(1);
  const [jpyMatic, setJpyMatic] = useState(1);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((data) => setUsdEth(data.ethereum.usd));
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=jpy"
    )
      .then((response) => response.json())
      .then((data) => setJpyEth(data.ethereum.jpy));
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=rocket-pool-eth&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((data) => setUsdReth(data["rocket-pool-eth"].usd));
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=rocket-pool-eth&vs_currencies=jpy"
    )
      .then((response) => response.json())
      .then((data) => setJpyReth(data["rocket-pool-eth"].jpy));
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((data) => setUsdMatic(data["matic-network"].usd));
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=jpy"
    )
      .then((response) => response.json())
      .then((data) => setJpyMatic(data["matic-network"].jpy));
    console.log("coingecko");
  }, []);
  return [usdEth, jpyEth, usdReth, jpyReth, usdMatic, jpyMatic];
};
