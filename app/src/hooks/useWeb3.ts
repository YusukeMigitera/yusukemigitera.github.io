import { useState } from "react";
import Web3 from "web3";
import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as bs58 from "bs58";

export const useEthBalance = () => {
  const [ethBalance, setEthBalance] = useState<string>("");

  const web3 = new Web3(
    new Web3.providers.HttpProvider(import.meta.env.VITE_ETHEREUM_API || "")
  );

  if (!ethBalance) {
    const getBalance = async () => {
      const address = (await import.meta.env.VITE_ADDRESS) || "";
      web3.eth.getBalance(address, (error, weiBalance) => {
        console.log("getEthBalance");
        if (error) {
          console.error(
            `Error getting ether balance for address ${address}:`,
            error
          );
          return;
        }

        const balance = web3.utils.fromWei(weiBalance, "ether");
        setEthBalance(balance);
      });
    };
    getBalance();
  }

  return ethBalance;
};

export const useMaticBalance = () => {
  const [maticBalance, setMaticBalance] = useState<string>("");

  const web3 = new Web3(
    new Web3.providers.HttpProvider(import.meta.env.VITE_POLYGON_API || "")
  );

  if (!maticBalance) {
    const getBalance = async () => {
      const address = (await import.meta.env.VITE_ADDRESS) || "";
      web3.eth.getBalance(address, (error, weiBalance) => {
        console.log("getMaticBalance");
        if (error) {
          console.error(
            `Error getting matic balance for address ${address}:`,
            error
          );
          return;
        }

        const balance = web3.utils.fromWei(weiBalance, "ether");
        setMaticBalance(balance);
      });
    };
    getBalance();
  }

  return maticBalance;
};

export const useSolanaBalance = () => {
  const [solBalance, setSolBalance] = useState<number>();

  const connection = new Connection(process.env.VITE_SOLANA_API || "");
  const feePayer = Keypair.fromSecretKey(
    bs58.decode(process.env.VITE_SOLANA_SECRET_KEY || "")
  );
  const getSolBalance = async () => {
    const balance = await connection.getBalance(feePayer.publicKey);
    console.log("getSolBalance");
    setSolBalance(balance / LAMPORTS_PER_SOL);
  };

  getSolBalance();
  return solBalance;
};
