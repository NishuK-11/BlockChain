

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const ConnectWallet = () => {
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (publicKey) {
        try {
          const balanceInLamports = await connection.getBalance(publicKey);
          setBalance(balanceInLamports / 1e9); // Convert to SOL
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
    };

    fetchBalance();
  }, [publicKey]);

  return (
    <div className="text-center">
      <WalletMultiButton className="bg-blue-500 p-3 rounded-lg" />
      {connected && (
        <div className="mt-4 text-lg">
          <p><strong>Wallet Address:</strong> {publicKey.toBase58()}</p>
          <p><strong>Balance:</strong> {balance} SOL</p>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
