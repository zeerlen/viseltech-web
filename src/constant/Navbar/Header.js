"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import whiteLogo from "../../assets/logo/whitelogo.png";
import blackLogo from "../../assets/logo/blacklogo.png";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CpuChipIcon, CommandLineIcon, CodeBracketIcon,  } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';

const products = [
  { name: "IA e IA Generativa", description: "Impulsionamos sua presença digital com soluções de inteligência artificial.", href: "/services/ai", icon: CpuChipIcon },
  { name: "Automação de Processos Robóticos (RPA)", description: "Otimizamos operações repetitivas com automações agéis e eficazes.", href: "/services/rpa", icon: CommandLineIcon },
  { name: "Hiperautomação", description: "Redefinimos o futuro dos negócios com IA e RPA, unindo agilidade, inovação e impacto.", href: "/services/hyperautomation", icon: CodeBracketIcon },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const segment = useSelectedLayoutSegment();
  const dropdownRef = useRef(null);

  const handleHover = () => setToggle(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const logo = segment === null ? whiteLogo : blackLogo;

  return (
    <header
      ref={dropdownRef}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        segment === null ? "bg-[#15160e] text-white" : "bg-white text-gray-900 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src={logo} alt="Company Logo" width={170} height={80} />
          </Link>
        </div>

        <div
          className={`hidden md:flex justify-center items-center gap-0 lg:gap-7 ${
            segment === null ? "text-[#eeeeee]" : "text-gray-900"
          }`}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/" className={`px-3 py-2 text-sm ${segment === null ? "navlink-white" : "navlink"}`} onClick={() => setToggle(false)}>
              Início
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/about" className={`px-3 py-2 text-sm ${segment === null ? "navlink-white" : "navlink"}`} onClick={() => setToggle(false)}>
              Sobre Nós
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/contact" className={`px-3 py-2 text-sm ${segment === null ? "navlink-white" : "navlink"}`} onClick={() => setToggle(false)}>
              Contato
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-1 justify-end">
        </div>
      </div>

      <div
        className={`p-4 absolute z-50 top-[5.5rem] lg:left-[20%] lg:right-[20%] bg-white rounded-lg shadow-lg grid grid-cols-2 transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 visible mt-2" : "opacity-0 invisible"
        }`}
      >
        {products.map((item) => (
          <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-indigo-50">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
            </div>
            <div className="flex-auto">
              <Link href={item.href} className="block font-semibold text-gray-900" onClick={() => setToggle(false)}>
                {item.name}
                <span className="absolute inset-0" />
              </Link>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;