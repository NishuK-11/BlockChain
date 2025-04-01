// import {
//     PublicKey,
//     Keypair,
//     Transaction,
//     SystemProgram,
//   } from "@solana/web3.js";
  
//   import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";

// // Ensure we always have a connection instance
// const connection = new Connection(clusterApiUrl("devnet"));

// export const createToken = async (wallet) => {
//   if (!wallet) {
//     console.error("Wallet not connected");
//     return;
//   }

//   try {
//     const mint = Keypair.generate(); // Generates a new token
//     console.log("Token Public Key:", mint.publicKey.toBase58()); // ✅ Log or use it

//     return mint; // ✅ Return the mint keypair if needed
//   } catch (error) {
//     console.error("Token creation failed:", error);
//   }
// };

  
//   // export const mintToken = async (wallet, connection) => {
//   //   if (!wallet) {
//   //     console.error("Wallet not connected");
//   //     return;
//   //   }
  
//   //   console.log("Minting token...");
//   // };
//   export const mintToken = async (wallet, mint) => {
//     if (!wallet) {
//       console.error("Wallet not connected");
//       return;
//     }
  
//     if (!mint) {
//       console.error("Mint not provided");
//       return;
//     }
  
//     console.log(`Minting token for ${mint.publicKey.toBase58()}...`);
//   };
  
  
//   export const sendToken = async (wallet, connection) => {
//     if (!wallet) {
//       console.error("Wallet not connected");
//       return;
//     }
  
//     console.log("Sending token...");
//   };


import {
  PublicKey,
  Keypair,
  Transaction,
  SystemProgram,
  Connection,
  clusterApiUrl,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet")); // ✅ Define connection once

export const createToken = async (wallet) => {
  if (!wallet) {
    console.error("Wallet not connected");
    return;
  }

  try {
    const mint = Keypair.generate();
    console.log("Token created by:", wallet.toBase58());
    
    // ✅ Example: Fetch latest blockhash to verify connection usage
    const { blockhash } = await connection.getLatestBlockhash();
    console.log("Latest Blockhash:", blockhash);

    return mint.publicKey.toBase58();
  } catch (error) {
    console.error("Token creation failed:", error);
  }
};

export const mintToken = async (wallet) => {
  if (!wallet) {
    console.error("Wallet not connected");
    return;
  }

  try {
    const balance = await connection.getBalance(wallet);
    console.log(`Wallet Balance: ${balance / 1e9} SOL`); // ✅ Use connection

    console.log("Minting token...");
  } catch (error) {
    console.error("Minting failed:", error);
  }
};

export const sendToken = async (wallet) => {
  if (!wallet) {
    console.error("Wallet not connected");
    return;
  }

  try {
    const balance = await connection.getBalance(wallet);
    console.log(`Wallet Balance Before Sending: ${balance / 1e9} SOL`); // ✅ Use connection

    console.log("Sending token...");
  } catch (error) {
    console.error("Transaction failed:", error);
  }
};


