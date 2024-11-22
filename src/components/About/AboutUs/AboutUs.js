import image from "@/constant/Images/image";
import Image from "next/image";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
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
                  Sobre <span className="highlight">Nós</span>
                </h2>
              </div>

              <p className="app__text pb-12">
              A ViselTech é uma startup  que impulsiona a transformação digital de organizações por meio da Inteligência Artificial, IA Generativa e Tecnologias Emergentes. 
              Projetamos e construímos plataformas digitais usando tecnologias de ponta para ajudar empresas a inovar, transformar negócios e promover o sucesso em seus mercados. 
              Com nossas soluções de ponta, profissionais qualificados e estratégias personalizadas, ajudamos empresas de todos os tamanhos a aumentar a satisfação do cliente, 
              impulsionar a eficiência operacional e o crescimento dos negócios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
