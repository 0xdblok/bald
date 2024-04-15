import React from "react";
import Image from "next/image";
import hero from "./hero.png";

export default function Hero() {
  return (
    <div>
      <div className="">
        <h1 className="px-24 text-center p-6 pt-8 font-mono font-semibold text-3xl">
          Hi I'm Briyan Armstrung, the crypto STRUNG BOY
        </h1>

        <div className="flex pt-4  justify-center">
          <Image src={hero} width={370} height={370} />
        </div>
      </div>
      <div className="text-center pt-4 text-xl font-medium font-mono">
        <p> </p>
      </div>
      <div className="text-xl text-slate-100 pt-28 text-center font-mono font-bold pt-6">
        <h1 className="text-3xl text-slate-100">TOKENOMICS</h1>
        <p className="pt-2">
          TOTAL SUPPLY : <span className=" text-slate-100">1B</span>
        </p>
        <p className=" break-words">
          CONTRACT ADDRESS : 0xCA34dA23609e9dD0244282BB751070e663ebAE46
        </p>
      </div>
    </div>
  );
}
