import { Transaction,SystemProgram,Connection,Keypair,LAMPORTS_PER_SOL,sendAndConfirmTransaction,PublicKey } from "@solana/web3.js";
import wallet from './dev-wallet.json';

const from= Keypair.fromSecretKey(new Uint8Array(wallet));

const to = new PublicKey("2GMrcLY1vrjr4274GsX4dwU7GgRgWSE9piAYWpYPd9jn");

const connection= new Connection("https://api.devnet.solana.com");

(async()=>{
    try {
        const transaction= new Transaction().add(
            SystemProgram.transfer({
                fromPubkey:from.publicKey,
                toPubkey:to,
                lamports:LAMPORTS_PER_SOL/10,
            })
        );
        
        transaction.recentBlockhash= (await connection.getLatestBlockhash('confirmed')).blockhash;

        const signature= await sendAndConfirmTransaction(connection,transaction,[from]);

        console.log(`Sucess! Check out your TX here:
            https://explorer.solana.com/tx/${signature}?cluster=devnet`);
        
    } catch (e) {
        console.error("Something's off I can feel it: "+e);
    }
})();