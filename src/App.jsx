
import './App.css';
import './index.css'; // If using global styles

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const App = () => {
  const { publicKey } = useWallet();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl text-blue-500 font-bold mb-4">Solana Wallet Integration</h1>
      <WalletMultiButton />
      {publicKey && <p className="mt-4">Connected: {publicKey.toBase58()}</p>}
    </div>
  );
};

export default App;





