import { createToken, mintToken, sendToken } from "../utils/solana";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const TokenActions = () => {
  const { publicKey } = useWallet();

  return (
    <div className="mt-6 space-x-4">
      <button
        className="bg-green-500 p-3 rounded-lg"
        onClick={() => createToken(publicKey, connection)}
      >
        Create Token
      </button>
      <button
        className="bg-yellow-500 p-3 rounded-lg"
        onClick={() => mintToken(publicKey, connection)}
      >
        Mint Token
      </button>
      <button
        className="bg-red-500 p-3 rounded-lg"
        onClick={() => sendToken(publicKey, connection)}
      >
        Send Token
      </button>
    </div>
  );
};

export default TokenActions;
