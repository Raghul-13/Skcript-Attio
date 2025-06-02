import React from "react";
import CocoCola from "../../../assets/CocoCola.png";
import Flatfile from "../../../assets/FlatFile.png";
import Modal from "../../../assets/Modal.png";
import USV from "../../../assets/USV.png";
import Replicate from "../../../assets/Replicate.png";
import Bravado from "../../../assets/Bravado.png";

const LogoShowcase:React.FC = () => {
  const logos = [
    { id: 1, name: "Coca-Cola", img: CocoCola },
    { id: 2, name: "Flatfile", img: Flatfile },
    { id: 3, name: "Modal", img: Modal },
    { id: 4, name: "USV", img: USV },
    { id: 5, name: "Replicate", img: Replicate },
    { id: 6, name: "Bravado", img: Bravado },
  ];

  return (
    <div className="py-5 px-4 sm:px-6 lg:px-8 bg-white border-b-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-5">
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="w-[120px] sm:w-[140px] md:w-[160px] flex items-center justify-center"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="h-auto max-h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;