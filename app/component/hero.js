import React from "react";
import Image from "next/image";
import hero from "./hero.png";

export default function Hero() {
  return (
    <div>
      <div className="">
        <h1 className="text-center p-6 pt-4 font-mono font-semibold text-3xl">
          Hi I'm Briyan Armstrung, the crypto STRUNG BOY{" "}
        </h1>
        <div className="flex pt-2 justify-center">
          <Image src={hero} width={350} height={350} />
        </div>
      </div>
      <div className="text-center pt-4 text-xl font-medium font-mono">
        <p> </p>
      </div>
      <div className="text-xl pt-12 text-center font-mono font-bold pt-6">
        <h1 className="text-3xl">TOKENOMICS</h1>
        <p className="pt-1">TOTAL SUPPLY : ...</p>
        <p>CONTRACT ADDRESS ...</p>
      </div>
    </div>
  );
}
