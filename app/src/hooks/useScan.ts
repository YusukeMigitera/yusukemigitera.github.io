import { useEffect, useState } from "react";

export const useEtherScan = () => {
  const [eth, setEth] = useState(0);
  const [reth, setReth] = useState();
  useEffect(() => {
    if (!eth) {
      fetch(
        `https://api.etherscan.io/api?module=account&action=balance&address=${
          import.meta.env.VITE_ADDRESS
        }&apikey=${import.meta.env.VITE_ETHERSCAN_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setEth(data.result));
      console.log("ether");
    }
  }, [eth]);
  useEffect(() => {
    if (!reth) {
      fetch(
        `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xae78736Cd615f374D3085123A210448E74Fc6393&address=${
          import.meta.env.VITE_ADDRESS
        }&tag=latest&apikey=${import.meta.env.VITE_ETHERSCAN_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setReth(data.result));
      console.log("reth");
    }
  }, [reth]);
  return [Number(eth) / 10 ** 18, Number(reth) / 10 ** 18];
};

export const usePolygonScan = () => {
  const [matic, setMatic] = useState();
  const [jpyc, setJpyc] = useState();
  useEffect(() => {
    if (!matic) {
      fetch(
        `https://api.polygonscan.com/api?module=account&action=balance&address=${
          import.meta.env.VITE_ADDRESS
        }&apikey=${import.meta.env.VITE_POLYGONSCAN_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setMatic(data.result));
      console.log("matic");
    }
  }, [matic]);
  useEffect(() => {
    if (!jpyc) {
      fetch(
        `https://api.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB&address=${
          import.meta.env.VITE_ADDRESS
        }&tag=latest&apikey=${import.meta.env.VITE_POLYGONSCAN_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setJpyc(data.result));
      console.log("jpyc");
    }
  }, [jpyc]);
  return [Number(matic) / 10 ** 18, Number(jpyc) / 10 ** 18];
};
