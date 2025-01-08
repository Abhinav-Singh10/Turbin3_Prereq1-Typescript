import { Keypair } from "@solana/web3.js";

let kp= Keypair.generate();

console.log(`Public Key in Base58: ${kp.publicKey.toBase58()}`);
console.log("--------------------------------------------------------------");

console.log(`Secret Key in u8 Array: 
[${kp.secretKey}]`);



