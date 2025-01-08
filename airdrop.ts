import { Connection,Keypair,LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./dev-wallet.json";

const keypair= Keypair.fromSecretKey(new Uint8Array(wallet));

const connection= new Connection("https://api.devnet.solana.com");

(async()=>{
    try {
        const txnHash= await connection.requestAirdrop(keypair.publicKey,LAMPORTS_PER_SOL*2);

        console.log(`Success! 🙌 Check out your TX here:
            https://explorer.solana.com/tx/${txnHash}?cluster=devnet`);
        
    } catch (e) {
        console.error("Something went wrong!: "+e);
    }
})();