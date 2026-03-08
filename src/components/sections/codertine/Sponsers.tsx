import React from "react";
import Image from "next/image";

const SPONSORS = [
  'https://res.cloudinary.com/dbsohsdkz/image/upload/v1759581862/gamecraft_qgv0mr.png',
  'https://res.cloudinary.com/dbsohsdkz/image/upload/v1759581862/flydemy_fuetbo.png',
  'https://res.cloudinary.com/dbsohsdkz/image/upload/v1759581862/codechef_uft891.png',
  'https://res.cloudinary.com/dbsohsdkz/image/upload/v1759581862/highlightproperty_jpxm7o.jpg',
  'https://res.cloudinary.com/dbsohsdkz/image/upload/v1759581862/makerworks_n1bseb.png'
]

export default function Sponsers() {
  return (
    <section className="flex flex-col items-center justify-start py-12">
      {/* SPONSORS */}
      <span className="text-2xl md:text-5xl mb-4 tracking-wide font-porticoRough font-black text-center">
        OUR TRUSTED PARTNERS AND SPONSORS
      </span>
      {" "}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-12">
        {SPONSORS.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor}
            alt={`SPONSOR LOGO ${index + 1}`}
            width={200}
            height={200}
          />
        ))}
        {/* <Image
          src="/codechef2.jpg"
          alt="CODECHEF LOGO"
          width={200}
          height={200}
        />
        <h1 className="text-xl md:text-3xl tracking-wide font-bold">
          HIGHLIGHT PROPERTY
        </h1> */}
      </div>
    </section>
  );
}
