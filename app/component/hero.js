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
          <Image src={hero} width={370} height={370} />
        </div>
      </div>
      <div className="text-center pt-4 text-xl font-medium font-mono">
        <p> </p>
      </div>
      <div className="text-xl text-slate-100 pt-16 text-center font-mono font-bold pt-6">
        <h1 className="text-3xl text-slate-100">TOKENOMICS</h1>
        <p className="pt-2">
          TOTAL SUPPLY : <span className=" text-slate-100">1B</span>
        </p>
        <p>CONTRACT ADDRESS ...</p>
      </div>
    </div>
  );
}
