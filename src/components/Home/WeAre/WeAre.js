import image from "@/constant/Images/image";
import Image from "next/image";
import "./WeAre.css";
import Link from "next/link";

const WeAre = () => {
  return (
    <section className="we-are-area flex items-center bg-slate-50 py-24 md:py-32">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <Image src={image.banner} alt="" />
          </div>
          <div className="we-are-animation">
            <Image src={image.like} alt="" className="h2-like" />
            <Image src={image.heart} alt="" className="h2-heart" />
            <Image src={image.message} alt="" className="h2-message" />
            <Image src={image.square} alt="" className="h2-square" />
            <Image src={image.circle} alt="" className="moving-circle" />
            <Image src={image.circle2} alt="" className="moving-circle-right" />
          </div>
        </div>
        <div>
          <div className="">
            <div className="we-are-content">
              <div className="section-title">
                <h2 className="pb-12 primary-heading">
                  Somos Exploradores <span className="highlight">Digitais</span>
                </h2>
              </div>

              <p className="app__text pb-10">
              A era digital vai além de se adaptar; é hora de se transformar. A Transformação Digital é o caminho para inovar, simplificar processos e alcançar grandes resultados. 
              Integrar tecnologia com estratégia cria experiências únicas e aumenta a eficiência. Empresas que aceitam essa mudança não apenas se mantêm no mercado, mas crescem em um cenário em constante mudança. 
              É a sua chance de liderar essa transformação e levar seu negócio a outro patamar. Pronto para começar essa jornada?
              </p>
              <div>
                <Link href="/about">
                  <button className="primary-btn shadow-lg">Saiba Mais</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
