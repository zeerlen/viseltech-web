import Link from "next/link";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";
import image from "../Images/image";

const Footer = () => {
  return (
    <footer className="pt-12 footer-bg relative">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start">
          <div className="flex-1">
            <h2 className="text-white text-2xl md:text-3xl font-medium">
            Interessado em obter nossos serviços incríveis?
            </h2>
          </div>
          <div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 ld:grid-cols-4 gap-y-8 pt-20">
          <div className="lg:pr-8 text-center md:text-start flex flex-col items-center md:items-start">
            <Image src={image.logo} alt='company logo' width={170}
              height={80}/>
              <p className="text-base mt-4 text-slate-200 hover:text-white transition-all duration-300">
                Processos simples, resultados gigantes.
            </p>
            <p className="text-base mt-4 text-slate-200 hover:text-white transition-all duration-300">
                CNPJ: 57.927.831/0001-20
            </p>
          </div>
          <div className="mx-auto text-center md:text-start">
            <div>
              <h3 className="text-white text-xl font-medium mb-6">
                Links Rápidos
              </h3>
            </div>
            <ul className="list-disc list-inside list-none">
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/">Início</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/about">Sobre Nós</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/contact">Contato</Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto text-center md:text-start">
            <div>
              <h3 className="text-white text-capital text-xl font-medium mb-6">
                Serviços
              </h3>
            </div>
            <ul className=" list-disc list-inside list-none">
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="#">
                  AI e AI Generativa
                </Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="#">
                  Automação de Processos Robóticos (RPA)
                </Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="#">
                  Hiperautomação
                </Link>
              </li>
            </ul>
          </div>

          <div className="mx-auto text-center md:text-start">
            <div>
              <div className="pb-50 pb-md-25 animate get-bottom">
                <h3 className="text-white text-capital text-xl font-medium mb-6">
                  Entre em Contato
                </h3>
              </div>
              <ul className="">
                <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-bold flex items-center justify-center md:justify-start gap-2"
                  >
                    <FaPhoneSquareAlt /> (92) 93618-5959
                  </a>
                </li>
                <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-sbold flex items-center justify-center md:justify-start gap-2"
                  >
                    <FaEnvelope /> contato@visel.tech
                  </a>
                </li>
                <li className="mt-8">
                  <ul className="flex justify-center gap-4 items-center">
                    <li className="social">
                      <a className="social-icon" href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li className="social">
                      <a className="social-icon" 
                      href="https://www.linkedin.com/company/viseltech/"
                      target="_blank"
                      rel="noopener noreferrer">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-6 mt-4 md:mt-8 lg:mt-12 mb-[4.5rem] md:mb-0">
        <p className="text-sm text-slate-200 hover:text-white transition-all duration-300">
          © Copyright <a href="#">visel.tech</a> 2024. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
